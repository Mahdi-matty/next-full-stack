'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Notification(){
    const { data: session, status } = useSession()
    const [notifications, setNotifications] = useState([])
    const isLoading = status === "loading";
    const router = useRouter()
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(session)
    const userId = session?.user?.id
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`api/users/${userId}/orders`)
                if(res.data.length>0){
                    const notData = {
                        userId: userId,
                        message: 'Proceed to checkout: <a href="/checkout">Go to checkout</a>',
                        status: 'undread'
                    }
                    const response = await fetch(`api/notification/new`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(notData)
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (!isLoading) {
            fetchData();
        }
    }, [isLoading])

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await fetch(`api/users/${userId}/notification`)
                setNotifications(res.data)
            } catch(error){
                console.log(error)
            }
        }
        if (!isLoading) {
            fetchData();
        }
    }, [isLoading])
    const handleDelete = async(note)=>{
        try {
            const res = await fetch(`api/notification/${note.id}`, {
                method: 'DELETE',
            })
            if(res.ok){
                console.log(res.data.message)
            }
        } catch( error){
            console.log(error)
        }
    }


    return (
        <>
            <div>
                {notifications&& (
                    notifications.map((note)=>{
                        <div key={note.id}>
                            <p>{note.message}</p>
                            <button className="bg-yellow-300 w-40 h-10 rounded-3xl m-4" onClick={()=>handleDelete(note)}>Delete</button>
                        </div>
                    })
                )}
            </div>
        </>
    )
}