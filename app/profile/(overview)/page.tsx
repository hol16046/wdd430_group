import Link from 'next/link';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import SellerProductsWrapper from '@/app/ui/seller/seller-wrapper';
import  { EditProfile } from '@/app/ui/seller/buttons';
import { Metadata } from "next";
import { SelectUser } from '@/app/lib/definitions';
import { SessionContext, SessionProvider, useSession } from 'next-auth/react';
import PageContent from '../pagecontent';
import { auth } from '@/auth';
import Head from 'next/head';
import { fetchUserData } from '@/app/lib/data';
import { sql } from '@vercel/postgres';

export const metadata: Metadata = {
    title: 'Profile',
  };



export default async function Page({ user }: { user: SelectUser }) {
    const session = await auth(); 
    const id = session?.user?.id
    const users = fetchUserData(Number(id))

    if (!session || !session?.user) {
        return <div>You are not authorized to view this page.</div>;
    }


    return (
        <>
            <Header/>
            <div className='md:container mx-auto'>
                <h1>{(await users).role === 'seller' ? 'Sellers Profile Page' : 'User Profile Page'}</h1>
                <h2>Welcome {(await users).f_name} {(await users).l_name}</h2>
                <h3>{(await users).email}</h3>

                <EditProfile id={id} />
            </div>
            <div className='container grid grid-cols-1 lg:grid-cols-5 gap-4 mx-auto w-full p-4'>
                {/* @ts-expect-error Server Component */}
                <SellerProductsWrapper />
            </div>
            <Footer />

        </>
    );
}