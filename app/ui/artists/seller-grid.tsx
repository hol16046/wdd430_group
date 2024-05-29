import { fetchSellerData } from '@/app/lib/data';
import Seller from './ind-seller';
import React from 'react';

let gridSize = 6

async function getSellerGridData() {
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
  return sellerData;
}

export default async function SellerGrid() {
  
  const renderedComponents = await getSellerGridData();

  return (
    <section className='mx-auto mb-10 w-[80%] grid gap-4 sm:grid-cols-3 sm:col-span-3'>
      {renderedComponents.filter(content => content !== undefined)
        .map((sellerData, index) => (
          <div key={index + 1}>
            {/* @ts-expect-error Server Component */}
            <Seller user_id={sellerData.user_id} />
          </div>
        ))
      }
    </section>
  );
}