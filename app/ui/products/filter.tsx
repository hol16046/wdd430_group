// export default function Filter(){
//     return (
//         <><div className="grid rounded-lg border-4 p-4">
//             <h3>Filters</h3>
//             <form>
//                 <h4>Categories</h4>
//                 <select name="" id="">
//                     <option value="">Option 1</option>
//                     <option value="">Option 1</option>
//                 </select>
//             </form>
//             </div>
//         </>
//     )
// }

import React, { useMemo } from 'react';
import { useState, useEffect, useRef } from 'react';
import Product from './ind-product-sort';
import { fetchAllProducts, fetchAllCategories, fetchProductsWithCategories, fetchProductsWithCategoryId } from '../../lib/data';



export default async function Filter() {
  const allProducts = await fetchAllProducts();
  const categoryId = useRef<HTMLSelectElement>(null);
  const categories = await fetchAllCategories();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  
  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);
  
  function getFilteredList() {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((product) => parseInt(categoryId.current?.value) === selectedCategory);
  }

  var filteredProductsList = useMemo(getFilteredList, [selectedCategory, products]);
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
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
            {categories.map((category) => (
                <option key={category.id} value={category.id}>
                {category.name}
                </option>
            ))}
            </select>
        </div>
    </div>
  );
}
