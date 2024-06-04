"use client"
import React, { useState } from 'react';
import Sort from './sort';
import ProductsGrid from './products/products-grid';
import Filter from './filter';


export default function ProductsWrapper() {
  const [sortOrder, setSortOrder] = useState('high-to-low');

  return (
    <>
        <aside id='filters' className='hidden sm:grid'>
            <Filter />
            <Sort setSortOrder={setSortOrder} />
       </aside>

      <ProductsGrid sortOrder={sortOrder} />
    </>
  );
}
