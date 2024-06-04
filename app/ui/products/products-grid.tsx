'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Product from './ind-product';
import { SelectCategory, ProductsWithCategories, SelectProductImage } from '@/app/lib/definitions';
import { unique } from 'drizzle-orm/mysql-core';


// export function Sort({ setSortOrder }) {
//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   return (
//     <div className="grid rounded-lg border-4 p-4">
//       <form>
//         <h4>Sort</h4>
//         <select name="" id="" onChange={handleSortChange}>
//           <option value="high-to-low">Price - High to Low</option>
//           <option value="low-to-high">Price - Low to High</option>
//         </select>
//       </form>
//     </div>
//   );
// }






export default function ProductsGrid({ productsData, uniqueProducts, categories, images }: { productsData: ProductsWithCategories[], uniqueProducts: ProductsWithCategories[], categories: SelectCategory[], images: SelectProductImage[] } ) {
  const allProductsData = productsData;
  const categoriesData = categories;
  const categoryId = useRef<HTMLSelectElement>(null);
  const [sortOrder, setSortOrder] = useState('high-to-low');
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  
  // const filteredProducts = allProductsData.filter((product) => { return product.product_category });
  // const filteredProductsByCategory = filteredProducts.filter((item) => item.product_category.category_id.toString() === selectedCategory);

  useEffect(() => {
      //const uniqueProducts = allProductsData.filter((product, index, self) => self.findIndex((t) => t.product.id === product.product.id) === index);
      setProducts(uniqueProducts);
      console.log('uniqueProducts:', uniqueProducts);
  }, [uniqueProducts]);
  console.log('products:', products);

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      return sortOrder === 'high-to-low' ? b.product.price - a.product.price : a.product.price - b.product.price;
    });
    if (!sortOrder) {
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

  // function getFilteredList() {
  //  if (selectedCategory) {
      //const uniqueProducts = products.filter((product, index, self) => self.findIndex((t) => t.product.id === product.product.id) === index);
    // console.log('selectedCategory:', selectedCategory);
    // const filteredProducts = allProductsData.filter((product) => { return product.product_category });
    // console.log('filteredProducts:', filteredProducts);
    // const filteredProductsByCategory = filteredProducts.filter((item) => item.product_category.category_id.toString() === selectedCategory);
    // console.log('filteredProductsByCategory:', filteredProductsByCategory);
  //  setProducts(filteredProductsByCategory);
  //  }
  // }

  // var filteredProductsList = useMemo(getFilteredList, [selectedCategory, filteredProductsByCategory]);
  const filteredImages = images.filter((image) => products.filter((product) => product.product.id === image.product_id));
  // console.log(filteredImages);


  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };


  return (
    <section className='grid sm:grid-cols-1 mb-10 lg:grid-cols-3 gap-4 col-span-3'>
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
      <div className="grid rounded-lg border-4 p-4">
        <form>
          <h4>Sort By:</h4>
          <select name="" id="" onChange={handleSortChange}>
            <option value=''>Select</option>
            <option value="high-to-low">Price - High to Low</option>
            <option value="low-to-high">Price - Low to High</option>
          </select>
        </form>
      </div>
      {products.map((product) => (
        <Product key={product.product.id} product={product.product} images={images} />
      ))}

      {/* {products.map((product) => (
        <div key={product.id} className='border-theme-rust border-2 rounded-lg p-3 w-50 h-75'>
                   <h3>{product.name}</h3>
                   <SortedImages id={product.id} />
                   <p>{product.price}</p>
                   <ProductDetails id={product.id} />
                   </div>
      ))} */}
    </section>
  );
}
