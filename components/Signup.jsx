'use client'

import { useState } from "react"
const SignUp = (props)=>{
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = async(e)=>{
        e.preventDefault()
        props.subHandl({
            username,
            email,
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
              <label>email</label>
          <input
            value={email}
            name="email"
            onChange={e=>setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          <label>Password</label>
          <input
            value={password}
            name="password"
            onChange={e=> setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
            </form>
        </div>
        </>
    )
};

export default SignUp