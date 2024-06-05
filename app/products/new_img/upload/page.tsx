
 
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