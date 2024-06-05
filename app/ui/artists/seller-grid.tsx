import { fetchAllSellers } from '@/app/lib/data';
import Seller from './ind-seller';
import React from 'react';


export default async function SellerGrid() {
  const sellerData = await fetchAllSellers();

  return (
    <section className='mx-auto mb-10 w-[80%] grid gap-4 sm:grid-cols-3 sm:col-span-3'>
      {sellerData.map((seller) => (
          <Seller key={seller.id} seller={seller} />
        ))}
    </section>
  );
}