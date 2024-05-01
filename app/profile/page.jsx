    'use client'

    import { useState, useEffect } from "react"
    import { useSession } from "next-auth/react"
    import { useRouter } from "next/navigation"

    export default function MyProfile() {
        const router = useRouter()
        const {data: session, status} = useSession()
        const isLoading = status === "loading";

        if (isLoading) {
            return <div>Loading...</div>;
        }
        console.log(session)
        const userId = session?.user?.id
        console.log(userId)
    

        return (
            <>
                <div>
                    <h3>salam</h3>
                </div>
            </>
        )
    }