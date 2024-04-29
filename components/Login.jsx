'use client'

import { useState } from "react"
const Login = (props)=>{
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = async(e)=>{
        e.preventDefault()
        propagateServerField.subHandle({
            username,
            password
        })
    }

    return (
        <>
        <div>
            <button>sign in Google</button>
        </div>
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Username</label>
          <input
            value={username}
            name="username"
            onChange={e=>setUserName(e.target.value)}
            type="text"
            placeholder="username"
          />
          <label>Password</label>
          <input
            value={password}
            name="password"
            onChange={e=> setPassword(e.target.value)}
            type="text"
            placeholder="Email"
          />
            </form>
        </div>
        </>
    )
};

export default Login