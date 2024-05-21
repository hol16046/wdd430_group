'use client';

import { SelectProduct, SelectProductImage } from '../../lib/definitions';
import Image from 'next/image';



export default function LargeProduct({ product, images }: { product: SelectProduct, images: SelectProductImage[] }) {
  
  
  return (
    // <div className="grid grid-cols-3 rounded-lg border-theme-rust border-2 p-3" >
    //   <h2 className="text-md p-1 col-span-3">{product.name}</h2>
    //   <Image className="rounded-md justify-self-center col-span-3" src={"/black-earrings.webp"} width={250} height={250} alt="Product Image"/>
    //   <h3 className="text-md p-1 col-span-3"><a href="#" className="hover:text-theme-rust">Product Name</a></h3>
    //   <p className="text-theme-dark-teal text-md font-medium self-center p-1">$0.00</p>
    //   <button type="button" className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-5 py-2.5 col-span-2 self-center justify-self-end">Add to Cart</button>
    // </div>
    <div className="grid grid-cols-3 px-3" >
      <h2 className="p-3 col-span-3 font-playfair text-2xl font-semibold mx-auto">{product.name}</h2>
      <Image className="rounded-md justify-self-center col-span-3 mb-3" src={images[0].image_file} width={350} height={250} alt={images[0].alt_text}/>
      <p className="text-theme-dark-teal text-md font-medium self-center p-1">${product.price}</p>
      <button type="button" className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-5 py-2.5 col-span-2 self-center justify-self-end">Add to Cart</button>
      <p className="text-md p-3 col-span-3">{product.description}</p>
    </div>
  );
}