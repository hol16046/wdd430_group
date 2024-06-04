import Image from "next/image"
import { fetchProductData, fetchProductImages, fetchSellerData } from "../lib/data";
import { notFound } from "next/navigation";
import { ProductDetails } from "./products/buttons";
import { SellerDetails } from "./artists/buttons";


export default async function Features(){

    let id = 5

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
        <div className="grid-wrap rounded-lg border-4 p-4 mb-1">
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

    {/* const alt = seller.shop_name + ' logo';
    if (!seller.user_id) {
        id=4
    } else {
        id = seller.user_id;
    }

    return (
        <div className="grid grid-cols-2 rounded-lg border-4 p-4 mx-auto">
            <div className='justify-self-center self-center'>
                <h3>Featured Artist</h3>
                <div>
                    <Image
                    src={seller.shop_logo}
                    width={200}
                    height={150}
                    className="hidden md:block rounded-md"
                    alt={alt}
                    />
                    <h4>{seller.shop_name}</h4>
                </div>
                <SellerDetails id={id} /> 

            </div>
            <div className='justify-self-center self-center'>
                <h3 className='lg:mt-10'>Featured Product</h3>
                <div>
                    <Image
                    src={images[0].image_file}
                    width={200}
                    height={150}
                    className="hidden md:block rounded-md"
                    alt={images[0].alt_text}
                    />
                    <h4>{product.name}</h4>
                </div>
                <ProductDetails id={product.id} />
            </div> */}
        </div>
    );
}
