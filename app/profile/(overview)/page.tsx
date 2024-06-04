'use client'
import Link from 'next/link';
import Header from '@/app/ui/header/header';
import { SelectUser } from '@/app/lib/definitions';
import { SessionProvider, useSession } from 'next-auth/react';
import { escape } from 'querystring';


export default function Page({user}:{user:SelectUser}) {
    return(
        <SessionProvider>
            <PageContent user={user}/>
        </SessionProvider> 
    )   
}

function PageContent({ user }: { user: SelectUser }){
    const {data:session, status} = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session || !session.user || session.user.id !== user.id.toString()) {
        return <div>You are not authorized to view this page.</div>;
    }

    return (
        <>
            <Header />
            <h1>{user.role === 'seller' ? 'Buyer Profile Page' : 'User Profile Page'}</h1>
        </>
    );
}