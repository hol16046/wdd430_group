
import Product from './ind-product';
import React from 'react';

let gridSize = 6


export default function ProductsGrid () {

  return (
    <section className='grid sm:grid-cols-1 mb-10 lg:grid-cols-3 gap-4 col-span-3'>
      
        {Array.from({ length: gridSize }, (_, index) => (
          <div key={index + 1}> 
            {/* @ts-expect-error Server Component */}
            <Product id={index +1} /> 
          </div>
        ))}
    </section>
  );
}
