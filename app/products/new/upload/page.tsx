
 
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
import { fetchAllProducts } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageUploadForm from '@/app/ui/products/add-new-img-form';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import { SelectProduct } from '@/app/lib/definitions';
import { Form } from '@/app/ui/products/upload-img-form';
 
export default async function NewProductImageUploadPage() {
  const products: SelectProduct[] = await fetchAllProducts();

  if (!products) {
    notFound();
  }

  return (
    <main className="font-red-hat">
      <Header />
      <ImageUploadForm products={products} />
      <Footer />
    </main>
  )
}