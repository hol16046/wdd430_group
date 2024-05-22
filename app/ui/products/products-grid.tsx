
import Product from './ind-product';
import React, { Suspense } from 'react';
import { IndProductSkeleton } from '../skeletons';

let gridSize = 6


export default function ProductsGrid () {

  return (
    <section className='mx-auto mb-10 w-[80%] grid gap-4 sm:grid-cols-3 sm:col-span-3'>
        {Array.from({ length: gridSize }, (_, index) => {
          let id = index + 1;
          return (
            <div key={id}> 
              <Suspense key={id} fallback={<IndProductSkeleton />}>
                <Product id={id} /> 
              </Suspense>
            </div>
          );
        })}
    </section>
  );
  
}
