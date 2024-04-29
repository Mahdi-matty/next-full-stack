'use client';
import Link from 'next/link'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Login from './Login';
const Nav = () => {
  const { data: session } = useSession();
  const [showLoginDev, setShowLoginDev] = useState(false)
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const toggleLogin = () => {
    setShowLoginDev(!showLoginDev);
  };

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
      </Link>

      {/* Desktop Navigation */}
      <div className='md:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            <div>
              <button
                type='button'
                onClick={() => {
                  toggleLogin();
                }}
                className='black_btn'
              >
                Sign in
              </button>
              {showLoginDev && (
                <div>
                  <Login subHandle={handleLogin}/>
                </div>
              )}


            </div>
          </>
        )}
      </div>

      {/* * Mobile Navigation * */}
      <div className='md:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div>
              <button
                type='button'
                onClick={() => {
                  setShowLoginDev(!showLoginDev);
                }}
                className='black_btn'
              >
                Sign in
              </button>
              {showLoginDev && (
                <div>
                  <Login subHandle={handleLogin}/>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;