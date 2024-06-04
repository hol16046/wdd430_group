'use client';
import React, { useMemo } from 'react';
import { useState, useEffect, useRef } from 'react';
import Product from './ind-product-sort';
import { SelectCategory, ProductsWithCategories, SelectProductImage } from '@/app/lib/definitions';





export default function CategoryProductsGrid({ productsData, categories, images }: { productsData: ProductsWithCategories[], categories: SelectCategory[], images: SelectProductImage[] } ) {
  const allProductsData = productsData;
  const categoriesData = categories;
  const categoryId = useRef<HTMLSelectElement>(null);
  const [products, setProducts] = useState(allProductsData);
  const [selectedCategory, setSelectedCategory] = useState();

  
  
  useEffect(() => {
    setProducts(allProductsData);
  }, [allProductsData]);

  
  function getFilteredList() {
    if (!selectedCategory) {
      const uniqueProducts = products.filter((product, index, self) => self.findIndex((t) => t.product.id === product.product.id) === index);
      return uniqueProducts;
    }
    // console.log('selectedCategory:', selectedCategory);
    const filteredProducts = allProductsData.filter((product) => { return product.product_category });
    // console.log('filteredProducts:', filteredProducts);
    const filteredProductsByCategory = filteredProducts.filter((item) => item.product_category.category_id.toString() === selectedCategory);
    // console.log('filteredProductsByCategory:', filteredProductsByCategory);
    return filteredProductsByCategory;
  }

  var filteredProductsList = useMemo(getFilteredList, [selectedCategory, products, allProductsData]);
  const filteredImages = images.filter((image) => filteredProductsList.filter((product) => product.product.id === image.product_id));
  console.log(filteredImages);
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className=''>
      <div className='filter-container'>
        <div>Filter by Category:</div>
        <div>
          <select
            name='category-list'
            id='category-list'
            defaultValue=''
            ref={categoryId}
            onChange={handleCategoryChange}
          >
            <option value=''>All</option>
            {categoriesData.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='price-sort-container'>

      </div>

      <div className='product-list'>
        {filteredProductsList.map((product) => (
          <Product key={product.product.id} product={product.product} images={images} />
        ))}
      </div>
    </div>

  );
}
