
import React, { useState } from 'react';
import Sort from '../sort';
import ProductsGrid from './products-grid-sort';
import Filter from './filter';
import { fetchAllCategories, fetchProductsWithCategories, fetchAllProductImages } from '@/app/lib/data';

export default async function ProductsWrapper() {
  // const [sortOrder, setSortOrder] = useState('high-to-low');
  const allProducts = fetchProductsWithCategories();
  const allCategories = fetchAllCategories();
  const allImages = fetchAllProductImages();
  const [products, categories, images ] = await Promise.all([allProducts, allCategories, allImages]);
  // console.log('allProducts', products);
  // console.log('allCategories', categories);

  return (
    <>
      <aside id='filters' className='hidden sm:grid'>
        {/* <Filter /> */}
        {/* <Sort setSortOrder={setSortOrder} /> */}
      </aside>
      <ProductsGrid productsData={products} categories={categories} images={images} />
    </>
  );
}
