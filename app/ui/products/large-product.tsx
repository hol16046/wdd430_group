'use client';

import { SelectProduct, SelectProductImage } from '../../lib/definitions';
import Image from 'next/image';
import { AddToCart } from './buttons';



export default function LargeProduct({ product, images }: { product: SelectProduct, images: SelectProductImage[] }) {
  
  
  return (
    <div className="grid grid-cols-3 px-3" >
      <h2 className="p-3 col-span-3 font-playfair text-2xl font-semibold mx-auto">{product.name}</h2>
      <Image className="rounded-md justify-self-center col-span-3 mb-3" src={images[0].image_file} width={350} height={350} alt={images[0].alt_text}/>
      <p className="text-theme-dark-teal text-md font-medium self-center p-1">${product.price}</p>
      <AddToCart product={product} addToCart={function (product: { id: number; seller_id: number | null; name: string; description: string; price: string; stock: number; }): void {
        throw new Error('Function not implemented.');
      } } />
      <p className="text-md p-3 col-span-3">{product.description}</p>
    </div>
  );
}

// I want to have a slideshow of images for the product if possible