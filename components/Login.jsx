'use client'

import { useState } from "react"
const Login = (props)=>{
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')


    const handleFormSubmit = async(e)=>{
        e.preventDefault()
        props.subHandle({
            username,
            password
        })
    }

    return (
        <>
        <div>
            <button className='bg-yellow-300 w-40 h-10 rounded-3xl m-4'>sign in Google</button>
        </div>
        <div>
            <form className="focus-within:underline" onSubmit={handleFormSubmit}>
                <label>Username</label>
          <input
            value={username}
            name="username"
            className="ml-2 px-4 py-2 border rounded"
            onChange={e=>setUserName(e.target.value)}
            type="text"
            placeholder="username"
          />
          <label>Password</label>
          <input
            value={password}
            name="password"
            className="ml-2 px-4 py-2 border rounded"
            onChange={e=> setPassword(e.target.value)}
            type="password"
            placeholder="Email"
          />
          <input 
          type="submit"/>
            </form>
        </div>
        </>
    )
};

export default Login