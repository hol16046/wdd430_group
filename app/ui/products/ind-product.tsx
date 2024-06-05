
import { fetchProductData, fetchProductImages } from '../../lib/data';
import { notFound } from  'next/navigation';
import Image from "next/image"
import { ProductDetails } from './buttons';
import { SelectProduct, SelectProductImage } from '@/app/lib/definitions';


export default function Product({product, images }: { product: SelectProduct, images: SelectProductImage[] }) {
  
  // console.log('images:', images)
  // console.log('product:', product)
  const imageData = images.filter((image) => image.product_id === product.id);
  // console.log('imageData:', imageData)
  

  if (!product) {
    notFound();
  };

  // This checks to make sure there is an image associated with the product, if not it will use a default image
  let imageFile = null;
  let altText = null;
  if (!imageData[0]) {
    imageFile = 'https://obn4bxfmc3wjm5to.public.blob.vercel-storage.com/no_image_available-fIvprCOARsb7obf9rVds5Q89bML91J.svg';
  } else {
    imageFile = imageData[0].image_file;
  }
  if (!imageData[0]) {
    altText = 'No image available';
  } else {
    altText = imageData[0].alt_text;
  }


  return (
    <div className="grid grid-cols-3 col-span-2 md:col-span-1 w-full mx-auto rounded-lg border-theme-rust border-2 p-3">
      {/* Render the product image */}
      <div className="col-span-3 sm:col-span-3 justify-center h-40 overflow-hidden relative">
        <Image
          className="rounded-md self-center justify-self-center"
          src={imageFile} 
          objectFit='cover'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          // width={250}
          // height={250}
          alt={altText}
        />
      </div>
      <div className='col-span-3 justify-self-center'>
        {/* Render product name */}
        <h3 className="text-sm p-1 ">
          <a href="#" className="hover:text-theme-rust">
            {product && product.name} {/* Ensure product is not null before accessing its properties */}
          </a>
        </h3>
      </div>
      <div className='col-span-1 self-center justify-self-center'>
        {/* Render product price */}
        <p className="text-theme-dark-teal text-sm font-medium self-center p-1">
          ${product && product.price} {/* Ensure product is not null before accessing its properties */}
        </p>
      </div>
        {/* Render product details button */}
        <div className="flex items-center justify-center w-full text-md overflow-hidden col-span-2 mx-2" >
          <ProductDetails id={product.id} />
        </div>
    </div>
  );
}