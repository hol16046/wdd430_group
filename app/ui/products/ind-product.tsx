'use client';
import { fetchProductData, fetchProductImages } from '../../lib/data';
import { notFound } from  'next/navigation';
import Image from "next/image"
import React, { useState, useEffect } from 'react';
import { SelectProduct, SelectProductImage } from '@/app/lib/definitions';

// Create a Product component skeleton, wrap this in Suspense with skeleton as the fallback. Ref overview page in nextjs dashboard example

export default function Product({ id }: { id: number }) {
  const [product,setProduct] = useState<SelectProduct | null>(null);
  useEffect(() => {
    async function fetchProduct() {
      const product = await fetchProductData(id);
      setProduct(product);
    }
    fetchProduct();
  }, [id]);

  const [images,setImages] = useState<SelectProductImage[] | null>(null);
  useEffect(() => {
    async function fetchImages() {
      const images = await fetchProductImages(id);
      setImages(images);
    }
    fetchImages();
  }, [id]);
  console.log (product);
  console.log(images);
  if (!product) {
    notFound();
  } else if (!images) {
    notFound();
  }

  return (
    <div className="grid grid-cols-3 rounded-lg border-theme-rust border-2 p-3">
      {/* Render the product image */}
      <Image
        className="rounded-md justify-self-center col-span-3"
        src={images[0].image_file} 
        width={250}
        height={250}
        alt={images[0].alt_text}
      />
      {/* Render product name */}
      <h3 className="text-sm p-1 col-span-3">
        <a href="#" className="hover:text-theme-rust">
          {product && product.name} {/* Ensure product is not null before accessing its properties */}
        </a>
      </h3>
      {/* Render product price */}
      <p className="text-theme-dark-teal text-md font-medium self-center p-1">
        ${product && product.price} {/* Ensure product is not null before accessing its properties */}
      </p>
      {/* Render add to cart button */}
      <button
        value={product.id}
        type="button"
        className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-4 py-2.5 col-span-2 self-center justify-self-end w-20"
      >
        Add to Cart
      </button>
    </div>
  );
}
