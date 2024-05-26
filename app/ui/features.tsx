import Image from "next/image"
import { fetchProductData, fetchProductImages, fetchSellerData } from "../lib/data";
import { notFound } from "next/navigation";
import { ProductDetails } from "./products/buttons";
import { SellerDetails } from "./artists/buttons";


export default async function Features(){

    const id = 5

    const [
        seller,
        product, 
        images, 
      ] = await Promise.all([
        fetchSellerData(id),
        fetchProductData(id),
        fetchProductImages(id),  
      ]);
     
      if (!product) {
        notFound();
      };

    return(
        <>
        <div className="grid-wrap rounded-lg border-4 p-4">
            <h3>Featured Artist</h3>
            <div>
                <Image
                src={seller.shop_logo}
                width={200}
                height={150}
                className="hidden md:block"
                alt={seller.shop_name}
                />
                <h4>{seller.shop_name}</h4>
            </div>
                 {/* @ts-expect-error Server Component */}
                <SellerDetails id={seller.user_id} /> 
            <h3 className='mt-10'>Featured Product</h3>
            <div>
                <Image
                src={images[0].image_file}
                width={200}
                height={150}
                className="hidden md:block"
                alt={product.name}
                />
                <h4>{product.name}</h4>
            </div>
                <ProductDetails id={product.id} />
            </div>
        </>
    )
}