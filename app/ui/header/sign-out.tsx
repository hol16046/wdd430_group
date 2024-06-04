'use client'
import { auth } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';
import { handleSignOut } from '@/app/lib/action';
import { SessionProvider, getSession, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function SignOut(){
    const { data: session, status } = useSession();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/check-auth');
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
      //console.log(isAuthenticated + "Inside signout");
    };

    checkAuth();
  }, []);

//   const handleSignOut = async () => {
//     setIsLoading(true);
//     await signOut();
//     setIsLoading(false);
//   };

    //console.log(!isAuthenticated + "Inside signout")

    if(status === "loading"){
        return <p>Loading</p>
    }

    //console.log(status)
    if(status === "authenticated"){
        return(
            <form action={handleSignOut}>
                <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Sign Out</div>
                </button>
            </form>
        )
    }
    // console.log(status)
    return(
        <a href='/login'>Login</a>
    )
    
}