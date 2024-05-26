import { fetchSellerData } from '@/app/lib/data';
import Seller from './ind-seller';
import React from 'react';

let gridSize = 6


export default async function SellerGrid() {
  const sellerData = [];
  for (let i = 1; i <= gridSize; i++) {
    try {
      const sellerContent = await fetchSellerData(i); 
      sellerData.push(sellerContent);
    } catch (error) {
      console.error('Error fetching seller data:', error);
      sellerData.push(null);
    }
  }
  console.log(sellerData, "sellerData")
  const renderedComponents = sellerData
    
    .filter(content => content !== undefined)
    .map((sellerData, index) => (
      <div key={index + 1}>
        {/* @ts-expect-error Server Component */}
        <Seller user_id={sellerData.user_id} />
      </div>
    ));

  return (
    <section className='mx-auto mb-10 w-[80%] grid gap-4 sm:grid-cols-3 sm:col-span-3'>
      {renderedComponents}
    </section>
  );
}