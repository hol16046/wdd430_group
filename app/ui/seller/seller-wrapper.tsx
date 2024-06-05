
import ProductsGrid from './seller-products-grid';
import { Suspense } from 'react';
import { ProductsGridSkeleton } from '../skeletons';
import { fetchAllCategories, fetchAllProducts, fetchAllProductImages, fetchSellerData } from '@/app/lib/data';



export default async function SellerWrapper(id) {
  const sellerData = fetchSellerData(Number(id));
  const allProducts = fetchAllProducts();
  const allImages = fetchAllProductImages();
  const [products, images, seller ] = await Promise.all([allProducts, allImages, sellerData]);
  const sellerProducts = products.filter((product) => product.seller_id == seller.id);
  console.log('products:', products);
  console.log('sellerProducts:', sellerProducts);


  return (
    <>
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsGrid productsData={sellerProducts} images={images} seller={seller} />
      </Suspense>      
    </>
  );
}
