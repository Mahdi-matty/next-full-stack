'use client'

import { useState, useEffect } from "react";
import PostCard from "./Postcard";
const PostCardlist = ({data, handleTagclick})=>{
    return (
        <div>
            {data.map((post)=>(
                <PostCard 
                key={post._id}
                post={post}
                handleTagclick={handleTagclick}/>
            ))}
        </div>
    )
}

export default function Feed(){
    const [searchText, setSearchText] = useState('')
    const [posts, setPosts ] = useState([])
    useEffect(async ()=>{
            const response = await fetch(`api/posts`)
            const data = await response.json()
            setPosts(data)
       
    })
    const handleChange = (e)=>{
        e.preventDefault()
    }

    retur (
        <>
        <section>
            <from>
                <input 
                type="text"
                value={searchText}
                onChange={(e)=>handleChange(e)}
                placeholder="search for a tag"/>
            </from>
            <PostCardlist 
            data={posts}
            handleTagclick={()=>{}}
            />
        </section>
        </>
    )

}