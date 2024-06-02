import Link from 'next/link';
import Header from '@/app/ui/header/header';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Profile',
  };




export default function Page() {
    return (
        <>
            <Header/>
            <h1>Buyer Profile Page</h1>
        </>
    )
}