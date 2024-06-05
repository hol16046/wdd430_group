import Image from "next/image"
import { fetchProductData, fetchProductImages, fetchSellerData } from "../lib/data";
import { notFound } from "next/navigation";
import { ProductDetails } from "./products/buttons";
import { SellerDetails } from "./artists/buttons";


export default async function Features(){
    let sellers = [1, 4, 5];

    let randomIndex = Math.floor(Math.random() * sellers.length);
    let id = sellers[randomIndex];

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
        
        <div className='rounded-lg border-2 border-theme-dark-teal p-4'>
            <div id='feat-artist-container' className=''>
                <h3 className='font-playfair text-center'>Featured Artist</h3>
                <div>
                    <Image
                    src={seller.shop_logo}
                    width={200}
                    height={150}
                    className="hidden md:block"
                    alt={seller.shop_name}
                    />
                    <h4 className='text-center'>{seller.shop_name}</h4>
                </div>
                <SellerDetails id={seller.user_id} /> 
            </div>
            <div id='feat-product-container' className=''>
                <h3 className='font-playfair text-center lg:mt-10'>Featured Product</h3>
                <div>
                    <Image
                    src={images[0].image_file}
                    width={200}
                    height={150}
                    className="hidden md:block"
                    alt={product.name}
                    />
                    <h4 className='text-center'>{product.name}</h4>
                </div> 
                <ProductDetails id={product.id} />
            </div>
        </div>
    );
}
