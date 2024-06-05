// import Sort from './sort';
import ProductsGrid from './products-grid';
// import Filter from './filter';
import { Suspense } from 'react';
import { ProductsGridSkeleton } from '../skeletons';
import { fetchAllCategories, fetchProductsWithCategories, fetchAllProductImages } from '@/app/lib/data';



export default async function ProductsWrapper() {
  const allProducts = fetchProductsWithCategories();
  const allCategories = fetchAllCategories();
  const allImages = fetchAllProductImages();
  const [products, categories, images ] = await Promise.all([allProducts, allCategories, allImages]);
  const uniqueProducts = products.filter((product, index, self) => self.findIndex((t) => t.product.id === product.product.id) === index);


  return (
    <>
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsGrid productsData={products} uniqueProducts={uniqueProducts} categories={categories} images={images} />
      </Suspense>
      <div className=''>
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
      
    </>
  );
}
