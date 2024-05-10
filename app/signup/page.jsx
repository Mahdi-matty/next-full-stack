'use client'

import { useState } from "react"

export default function SignUp() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleFormSubmit = (event)=>{
        event.preventDefault()
        const userObj = {
            username: username,
            email: email,
            password: password
        }

        const fetchData= async()=>{
            try {
                const res = await fetch(`/api/admin/signup`, {
                    method: 'POST',
                    body: JSON.stringify(userObj),
                headers: {
                    "Content-Type": "application/json"
                }
                })
                if(res.ok){
                    console.log('operation success')
                }
            } catch(error){
                console.log(error)
            }
        }
        fetchData()
    }



    return (
        <>
            <div>
                <form className="text-gray-400 focus-within:text-green-600 focus-within:underline" onSubmit={handleFormSubmit}>
                    <label>Username</label>
                    <input
                        value={username}
                        name="username"
                        onChange={e => setUserName(e.target.value)}
                        type="text"
                        className="ml-2 px-4 py-2 border rounded"
                        placeholder="username"
                    />
                    <label>email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        className="ml-2 px-4 py-2 border rounded"
                        type="text"
                        placeholder="email"
                    />
                    <label>Password</label>
                    <input
                        value={password}
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        className="ml-2 px-4 py-2 border rounded"
                        type="password"
                        placeholder="password"
                    />
                    <input
                        type="submit" />
                </form>
            </div>

        </>
    )

}