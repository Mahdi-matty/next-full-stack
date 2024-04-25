'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"
import Feed from "@components/Feed"
import Profile from "@components/Profile"

export default function MyProfile() {
    const router = useRouter()
    const {data: session} = useSession()
    const [submitted, setSubmitted] = useState(false)
    const [myPosts, setMyPosts]= useState([])
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    useEffect(async ()=>{
        const response = await fetch(`api/users/${session?.user.id}`)
        const data = await response.json()
        setMyPosts(data)
   
}, [session?.user.id])

    const createPost = async(e)=>{
        e.preventDefault();
        setSubmitted(true)
        try {
                const response = await fetch('/api/posts/new', {
                    method: 'POST',
                    body: JSON.stringify({
                        prompt : post.prompt,
                        userId: session?.user.id,
                        tag: post.tag
                    })
                })
                if(response.ok){
                    router.push('/')
                }
        } catch(error){
            console.error(error)
        }finally{
            setSubmitted(false)
        }
    }

    return (
        <>
            <div>
                <Form
                type= "create"
                post= {post}
                setPost = {setPost}
                submitted= {submitted}
                handleSubmit= {createPost} />
            </div>
            <Feed />
            <Profile 
            name='My'
            data={[myPosts]}
            handleEdit={handleEdit}
            handleDelete={handleDelete}/>
        </>
    )
}