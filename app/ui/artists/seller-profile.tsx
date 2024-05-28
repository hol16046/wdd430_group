'use client'

import { SelectUser, SelectSeller } from "@/app/lib/definitions";
import Image from 'next/image';

export default function SellerProfile({ user, seller }: { user: SelectUser, seller: SelectSeller }) {
  return (
    <div className="flex justify-center ">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full max-w-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{seller.shop_name} </h3>
          <Image className="rounded-md justify-self-center col-span-3 mb-3" src={seller.shop_logo} width={350} height={250} alt={seller.shop_name}/>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Artisan:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.f_name} {user.l_name} </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Biography</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {seller.shop_story}
              </dd>
            </div>
            {/* Add more biography details as needed */}
          </dl>
        </div>
        <div className="px-4 py-3 sm:px-6 flex justify-center">
          <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Contact Artist</button>
        </div>
      </div>
    </div>
  );
}


