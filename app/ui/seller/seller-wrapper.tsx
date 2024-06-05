
import ProductsGrid from './seller-products-grid';
import { Suspense } from 'react';
import { ProductsGridSkeleton } from '../skeletons';
import { fetchAllCategories, fetchAllProducts, fetchAllProductImages, fetchSellerData, fetchUserData } from '@/app/lib/data';
import SellerProfile from './seller-profile';



export default async function SellerWrapper(id) {
  console.log('id:', id)
  const sellerData = fetchSellerData(parseInt(id.id));
  const userData = fetchUserData(id.id);
  const allProducts = fetchAllProducts();
  const allImages = fetchAllProductImages();
  const [products, images, seller, user ] = await Promise.all([allProducts, allImages, sellerData, userData]);
  const sellerProducts = products.filter((product) => product.seller_id == seller.id);
  console.log('products:', products);
  console.log('sellerProducts:', sellerProducts);


  return (
    <>
      <div className='col-span-full'>
        <SellerProfile user={user} seller={seller} />
      </div>
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsGrid productsData={sellerProducts} images={images} seller={seller} />
      </Suspense>      
    </>
  );
}
