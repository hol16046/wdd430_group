'use client'

import { SelectUser, SelectSeller } from "@/app/lib/definitions";
import Image from 'next/image';
import Link from 'next/link';

export default function SellerProfile({ user, seller }: { user: SelectUser, seller: SelectSeller }) {

  const alt = seller.shop_name + ' logo';

  return (
    <div className="grid justify-center ">
      <div className="bg-white overflow-hidden sm:rounded-lg w-full lg:max-w-md grid md:grid-cols-3 px-4 py-5 gap-2">
          <h2 className="justify-self-center col-span-3 font-playfair text-gray-900 text-center text-xl font-semibold">{seller.shop_name} </h2>
          <Image className="rounded-md justify-self-center col-span-3 md:col-span-2" src={seller.shop_logo} width={350} height={250} alt={alt}/>
          <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm text-gray-900 col-span-full self-center">
                {seller.shop_story}
              </div>
            </div>
            {/* Add more biography details as needed */}
        
      </div>
    </div>
  );
}


