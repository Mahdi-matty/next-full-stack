'use client';

import Link from 'next/link'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

export default function Nav(){
    const isLoggedIn = true;
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'></Link>
            <div className='sm:flex hidden'>
                {isLoggedIn ? (<div>
                    <Link href='/createpost'>create new post</Link>
                    <button onClick={signOut} className='outline_btn'>signOut</button>
                </div>): (<div></div>)}
            </div>
        </nav>

    )
}