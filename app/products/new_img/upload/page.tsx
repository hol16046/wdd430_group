
 
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef, Suspense } from 'react';
import { fetchAllProducts, fetchSellerById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageUploadForm from '@/app/ui/products/add-new-img-form';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import { SelectProduct } from '@/app/lib/definitions';
import { Metadata } from "next";
import { auth } from '@/auth';
import Link from 'next/link';


export const metadata: Metadata = {
    title: 'Upload Image',
  };


 
export default async function NewProductImageUploadPage(props) {
  const url = props.searchParams;
  const sellerId = parseInt(url.id);
  const allProducts: SelectProduct[] = await fetchAllProducts();
  const sellerProducts = allProducts.filter((product) => product.seller_id == sellerId);

  if (!sellerProducts) {
    notFound();
  }

  const session = await auth(); 
  const id = parseInt(session?.user?.id);
    if (!session || !session?.user || id !== sellerId) {
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
    <main className="font-red-hat">
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <ImageUploadForm products={sellerProducts} />
      </Suspense>
      <Footer />
    </main>
  )
}