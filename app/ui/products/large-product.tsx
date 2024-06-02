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
    <div className="grid grid-cols-3 px-3" >
      <h2 className="p-3 col-span-3 font-playfair text-2xl font-semibold mx-auto">{product.name}</h2>
      <div className='col-span-3 mb-3'>
        {/* If there is more than one image, the carousel will be displayed, otherwise the image will be displayed */}
        {images.length > 1 ? <ImgCarousel images={images} /> : <Image src={imageFile} width={350} height={350} alt={altText} className='object-cover w-full' />}
      </div>
      <p className="text-theme-dark-teal text-md font-medium self-center p-1">${product.price}</p>
      <AddToCart product={product} addToCart={function (product: SelectProduct): void {
        throw new Error('Function not implemented.');
      } } />
      <p className="text-md p-3 col-span-3">{product.description}</p>
    </div>
  );
}