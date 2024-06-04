
import { fetchProductData, fetchProductImages } from '../../lib/data';
import { notFound } from  'next/navigation';
import Image from "next/image"
import { ProductDetails } from './buttons';



export default async function Product({ id }: { id: number }) {
  
  const [
    product, 
    images, 
  ] = await Promise.all([
    fetchProductData(id),
    fetchProductImages(id),  
  ]);
 
  if (!product) {
    notFound();
  };

  return (
    <div className="grid grid-cols-3 rounded-lg border-theme-rust border-2 p-3 h-full">
      {/* Render the product image */}
      <div className="col-span-3 justify-center w-full  h-40 overflow-hidden">
      <Image
        className="rounded-md justify-self-center col-span-3"
        src={images[0].image_file} 
        width={250}
        height={250}
        sizes='30vw'
        alt={images[0].alt_text}
      />
      </div>
      {/* Render product name */}
      <h3 className="text-sm p-1 col-span-3">
        <a href="#" className="hover:text-theme-rust">
          {product && product.name} {/* Ensure product is not null before accessing its properties */}
        </a>
      </h3>
      {/* Render product price */}
      <p className="text-theme-dark-teal text-sm font-medium self-center p-1">
        ${product && product.price} {/* Ensure product is not null before accessing its properties */}
      </p>
      {/* Render add to cart button */}
      <div className="flex items-center justify-center w-full text-md overflow-hidden col-span-2 mx-2" >
      <ProductDetails id={product.id} />
      </div>
    </div>
  );
}
