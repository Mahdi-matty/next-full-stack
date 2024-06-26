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
  console.log(session)
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
    setShowSignUpDev(false)
  };

  const handleSignUp = async (userobj) => {
    const userData = {
      username: userobj.username,
      email: userobj.email,
      password: userobj.password
    };
  
    try {
      const res = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log(data.message);
      }else {
        // Handle error responses
        const errorMessage = await res.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (userObj) => {
    console.log('Request Payload:', userObj);
    const result = await signIn('credentials', {
      username: userObj.username,
      password: userObj.password,
      redirect: false
    })
    console.log('SignIn Result:', result);
    if (result.error) {
      console.log('Authentication failed:', result.error);
    } else {
      console.log('Authentication successful:', result);
      setShowLoginDev(false)
      setShowSignUpDev(false)
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
            <button type='button' onClick={signOut} className='bg-yellow-300 w-40 h-10 rounded-3xl m-4'>
              Sign Out
            </button>

            <Link className='bg-yellow-300 w-40 h-10 rounded-3xl m-4' href='/cart'>
              <p className='pl-10'>Cart</p>
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
                    <p>Don't have an account? <button className='bg-yellow-300 w-40 h-10 rounded-3xl m-4' onClick={(e) => handleClick(e)}>Signup now!</button></p>
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