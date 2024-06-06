import Link from 'next/link';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import SellerProductsWrapper from '@/app/ui/seller/seller-wrapper';
import  { EditProfile } from '@/app/ui/seller/buttons';
import { Metadata } from "next";
import { SelectUser } from '@/app/lib/definitions';
import { SessionContext, SessionProvider, useSession } from 'next-auth/react';
import { auth } from '@/auth';
import Head from 'next/head';
import { fetchUserData, fetchSellerData } from '@/app/lib/data';
import { sql } from '@vercel/postgres';

export const metadata: Metadata = {
    title: 'Profile',
  };


export default async function Page() {
    const session = await auth(); 
    const id = session?.user?.id
    const users = fetchUserData(Number(id))
    const seller = fetchSellerData(Number(id))

    console.log('page', session, id, users, seller)
    


    if (!session || !session?.user) {
        return (
            <main className='mx-auto font-red-hat'>
                <Header/>
                <div className='grid mx-auto py-5 h-[100vw] sm:h-[65vw] md:h-[30vw] w-[80%]'>
                    <div className='col-span-full self-center justify-self-center font-semibold text-center text-2xl text-theme-rust'>Sorry, you are not authorized to view this page.</div>
                    <Link
                        href={`/profile`}
                        className='form-btn col-span-full mt-2 self-center justify-self-center'>
                        Back to Profile
                    </Link>
                </div>
                <Footer />

            </main>
        );
    }


    return (
        <main className='mx-auto font-red-hat'>
            <Header/>
            <div className='md:container mx-auto grid gap-1 sm:grid-cols-2'>
                <h1 className='font-red-hat text-xl font-semibold self-center justify-self-center text-center sm:text-left'>Welcome {(await users).f_name} {(await users).l_name}</h1>
                {(await users).role === 'seller' ? <EditProfile id={id} /> : (null)}
            </div>
            <div className='container grid grid-cols-1 lg:grid-cols-5 gap-4 mx-auto w-full p-4'>
                {/* @ts-expect-error Server Component */}
                {(await users).role === 'seller' ? <SellerProductsWrapper user={(await users)} seller={(await seller)} /> : (null)}
            </div>
            <Footer />

        </main>
    );
}