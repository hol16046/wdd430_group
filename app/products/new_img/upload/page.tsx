
 
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
import { fetchAllProducts } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import ImageUploadForm from '@/app/ui/products/add-new-img-form';
 
export default async function NewProductImageUploadPage() {
  const products = await fetchAllProducts();

  if (!products) {
    notFound();
  }

  return (
    <main className="font-red-hat">
      <ImageUploadForm products={products} />
    </main>
  )
}