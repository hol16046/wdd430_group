"use client"
import React, { useState } from 'react';
import Sort from './sort';
import ProductsGrid from './products/products-grid';


export default function ProductsWrapper() {
  const [sortOrder, setSortOrder] = useState('high-to-low');

  return (
    <>
        <aside id='filters' className='hidden sm:grid'>
            <Sort setSortOrder={setSortOrder} />
       </aside>

      <ProductsGrid sortOrder={sortOrder} />
    </>
  );
}
