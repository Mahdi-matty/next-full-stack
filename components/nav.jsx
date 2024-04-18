'use client';

import Link from 'next/link'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import { useEffect, useState } from 'react';

export default function Nav(){
    const {data: session} = useSession()
    const [providers, setProviders] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)
    useEffect(()=>{
        const setUpProviders = async()=>{
            const response= await getProviders();
            setProviders(response)
        }
        setUpProviders()
    }, [])
    
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'></Link>
            <div className='sm:flex hidden'>
                {session?.user ? (<div>
                    <img src={session?.user.image}/>
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
                {session?.user ? (<div>
                    <h2>loged in</h2>
                    <img 
                    src={session?.user.image}
                    onClick={()=>setToggleDropDown((prev)=>!prev)}/>
                    {toggleDropDown && (
                        <div className='dropwdown'>
                            <Link
                            href='/profile'
                            className='dropdown_link'
                            onClick={()=>setToggleDropDown(false)} />
                        </div>
                    )}
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
        </nav>

    )
}