'use client'

import { createContext, useState, useEffect, useContext } from "react";
export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext)

export default function AuthProvider({ children, initialToken }) {
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('api/admin/token', {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${initialToken}`
                    }
                })
                if (res.ok) {
                    const data = await res.json()
                    console.log(data)
                    setToken(initialToken)
                    setIsLoggedIn(true)
                }else{
                    localStorage.removeItem('initialToken')
                }
            } catch (error) {
                console.log(error)
            }
            if (initialToken) {
                fetchData()
            }
        }

    }, [initialToken])


    return (
        <AuthContext.Provider value={{ token, isLoggedIn }} >
            {children}
        </AuthContext.Provider>
    )
}