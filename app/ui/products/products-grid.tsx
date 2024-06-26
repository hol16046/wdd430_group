'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Product from './ind-product';
import { SelectCategory, ProductsWithCategories, SelectProductImage } from '@/app/lib/definitions';
import { unique } from 'drizzle-orm/mysql-core';


const sortValues = [
  { value: 'high-to-low', label: 'Price - High to Low' },
  { value: 'low-to-high', label: 'Price - Low to High' },
];




export default function ProductsGrid({ productsData, uniqueProducts, categories, images }: { productsData: ProductsWithCategories[], uniqueProducts: ProductsWithCategories[], categories: SelectCategory[], images: SelectProductImage[] } ) {
  const allProductsData = productsData;
  const categoriesData = categories;
  const categoryId = useRef<HTMLSelectElement>(null);
  const sortOrderValue = useRef<HTMLSelectElement>(null);
  const [sortOrder, setSortOrder] = useState('high-to-low');
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
      setProducts(uniqueProducts);
  }, [uniqueProducts]);
  // console.log('products:', products);

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      return sortOrder === 'high-to-low' ? b.product.price - a.product.price : a.product.price - b.product.price;
    });
    console.log(sortOrder);
    if (sortOrder === '') {
      return;
    } else {
      setProducts(sortedProducts);
    }
  }, [sortOrder]);

  useEffect(() => {
    const filteredProducts = allProductsData.filter((product) => { return product.product_category });
    if (selectedCategory) {
      const filteredProductsByCategory = filteredProducts.filter((item) => item.product_category.category_id.toString() === selectedCategory);
      setProducts(filteredProductsByCategory);
    } else if (!selectedCategory) {
      setProducts(uniqueProducts);
    }
  }, [selectedCategory]);
 
  const filteredImages = images.filter((image) => products.filter((product) => product.product.id === image.product_id));
  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };


  return (
    <section className='grid sm:grid-cols-2 mb-10 lg:grid-cols-3 gap-4 col-span-2 lg:col-span-4'>
      <div id='sort-filter-container' className='grid col-span-2 w-[80%] sm:grid-cols-2 gap-4 sm:w-full lg:col-span-full mx-auto rounded-lg border-2 border-theme-dark-teal p-2'>
        <div className='filter-container m-2'>
          <h4 className='font-playfair'>Filter by Category:</h4>
          <form className=''>
            <select
              name='category-list'
              id='category-list'
              className='border-2 border-theme-teal rounded-md p-2 mt-2 w-full'
              defaultValue=''
              ref={categoryId}
              onChange={handleCategoryChange}
            >
              <option value=''>All</option>
              {categoriesData.map((category) => (
                <option key={category.name} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="sort-container m-2">
          <form>
            <h4 className='font-playfair'>Sort By:</h4>
            <select 
              name="" 
              id="" 
              ref={sortOrderValue}
              className='border-2 border-theme-teal rounded-md p-2 mt-2 w-full'
              onChange={handleSortChange}
            >
              <option value=''>Select</option>
              {sortValues.map((sort) => (
                <option key={sort.value} value={sort.value}>
                  {sort.label}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      {products.map((product) => (
        <Product key={product.product.id + product.product.name} product={product.product} images={filteredImages} />
      ))}
    </section>
  );
}
