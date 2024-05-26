import { fetchSellerById, fetchSellerData, fetchUserData } from '../../lib/data';
import { notFound } from  'next/navigation';
import Image from "next/image"
import { SellerDetails } from './buttons';


export default async function Seller({ user_id }: { user_id: number }) {
 
  const [ seller ] = await Promise.all([
    
    fetchSellerById(user_id) 
  ]);

  if (!seller ) {
    return null; 
  }

  return (
    <div className="grid grid-cols-3 rounded-lg border-theme-rust border-2 p-3">
      {/* Render the seller logo image */}
      <Image
        className="rounded-md justify-self-center col-span-3"
        src={seller.shop_logo} 
        width={250}
        height={250}
        alt={seller.shop_name}
      />
      {/* Render seller shop name */}
      <h3 className="justify-self-center text-sm p-1 col-span-3">
          {seller && seller.shop_name} {/* Ensure seller is not null before accessing its properties */}
      </h3>
      {/* Render Details page */}
      <SellerDetails id={user_id} />
    </div>
  );
}