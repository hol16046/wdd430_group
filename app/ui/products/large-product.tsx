'use client';

import { SelectProduct, SelectProductImage } from '../../lib/definitions';
import Image from 'next/image';
import { AddToCart } from './buttons';
import ImgCarousel from './carousel/img-carousel';



export default function LargeProduct({ product, images }: { product: SelectProduct, images: SelectProductImage[] }) {
  
  // This checks to make sure there is an image associated with the product, if not it will use a default image
  let imageFile = null;
  let altText = null;
  if (images[0]) {
    imageFile = images[0].image_file;
  } else {
    imageFile = 'https://obn4bxfmc3wjm5to.public.blob.vercel-storage.com/no_image_available-fIvprCOARsb7obf9rVds5Q89bML91J.svg';
  }
  if (images[0]) {
    altText = images[0].alt_text;
  } else {
    altText = 'No image available';
  }
  
  return (
    <div className="grid grid-cols-3 px-3 gap-2 relative" >
      <h2 className="p-3 col-span-3 font-playfair text-2xl font-semibold mx-auto">{product.name}</h2>

      <div className='col-span-3 min-h-[400px] md:min-h-[500px] sm:w-[90%] md:w-full lg:w-[90%] sm:justify-self-center md:self-center h-full relative block'>
        {/* If there is more than one image, the carousel will be displayed, otherwise the image will be displayed */}
        {images.length > 1 ? <ImgCarousel images={images} /> : <Image src={imageFile} fill alt={altText} className='object-cover md:w-[80%] rounded-md relative block' sizes='60vw' />}
      </div>
      <p className="text-theme-dark-teal text-md font-medium self-center p-1">${product.price}</p>
      <button type="button" className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-5 py-2.5 col-span-2 self-center justify-self-end">Add to Cart</button>
      {/* <AddToCart product={product} addToCart={function (product: { id: number; seller_id: number | null; name: string; description: string; price: string; stock: number; }): void {
        throw new Error('Function not implemented.');
      } } /> */}
      <p className="text-md p-3 col-span-3">{product.description}</p>

    </div>
  );
}