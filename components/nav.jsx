'use client';

import Link from 'next/link'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import { useEffect, useState } from 'react';

export default function Nav(){
    const [providers, setProviders] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)
    useEffect(()=>{
        const setProviders = async()=>{
            const response= await getProviders();
            setProviders(response)
        }
        setProviders()
    }, [])
    const isLoggedIn = true;
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'></Link>
            <div className='sm:flex hidden'>
                {isLoggedIn ? (<div>
                    <Link href='/createpost'>create new post</Link>
                    <button onClick={signOut} className='outline_btn'>signOut</button>
                </div>): (<>
                {providers && Object.values(providers).map((provider)=>(
                    <button
                    key={provider.name}
                    onClick={()=>singIn(provider.id)}
                    className='black_btn'>

                    </button>
                ))}
                </>)}
            </div>
            <div className='sm:hidden flex relative'>
                {isLoggedIn ? (<div>
                    <h2>loged in</h2>
                </div>): (<>
                {providers && Object.values(providers).map((provider)=>(
                    <button
                    key={provider.name}
                    onClick={()=>setToggleDropDown((prev)=>!prev)}
                    className='black_btn'>

                    </button>
                ))}
                </>)}
            </div>
        </nav>

    )
}