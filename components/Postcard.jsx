'use client'

import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

export default function PostCard({post, handleTagClick, handleEdit, handleDelete}){
    return (
        <div>
            <div>
                <Image 
                src={post.creator.image}/>
                <div>
                    <h4>{post.creator.username}</h4>
                </div>
            </div>
            <div>
                <p>{post.prompt}</p>
                <p>{post.tag}</p>
            </div>
        </div>
    )
}