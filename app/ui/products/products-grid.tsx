'use client';

import Product from './ind-product';
import React from 'react';

let gridSize = 6


export default function ProductsGrid () {

  return (
    <section className='mx-auto mb-10 w-[80%] grid gap-4 sm:grid-cols-3 sm:col-span-3'>
        {Array.from({ length: gridSize }, (_, index) => (
          <div key={index + 1}> <Product id={index +1} /> </div>
        ))};
    </section>
  );
}
