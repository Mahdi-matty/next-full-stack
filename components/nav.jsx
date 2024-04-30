'use client';
import Link from 'next/link'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import Login from './Login';
import SignUp from './Signup';
const Nav = () => {
  const { data: session } = useSession();
  const [showLoginDev, setShowLoginDev] = useState(false)
  const [showSignUpDev, setShowSignUpDev] = useState(false)
  const [providers, setProviders] = useState(null);
  const router = useRouter()

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setShowSignUpDev(!showSignUpDev)
    setShowLoginDev(!showLoginDev)
  }

  const toggleLogin = () => {
    setShowLoginDev(!showLoginDev);
  };

  const handleSignUp = async (userobj, e) => {
    e.preventDefault();
    const user = ({
      username: userobj.username,
      email: userobj.email,
      password: userobj.password
    })
    try {
      const res = await fetch(`api/register`, user);
      if (res.ok) {
        console.log(res.meesage)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (userObj, e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      username: userObj.username,
      password: userObj.password,
      redirect: false
    })
    if (result.error) {
      console.log('Authentication failed:', result.error);
    } else {
      console.log('Authentication successful:', result);
      router.push("/profile");
    }
  }


  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
      </Link>

      {/* Desktop Navigation */}
      <div className='flex'>
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
                  <Login subHandle={handleLogin} />
                  <div>
                    <p>Don't have an account? <button onClick={() => handleClick()}>Signup now!</button></p>
                  </div>
                </div>
              )}
              {showSignUpDev && (
                <div>
                  <SignUp subHandl={handleSignUp} />
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