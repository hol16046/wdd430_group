import { fetchSellerById } from '../../lib/data';
import Image from "next/image"
import { SellerDetails } from './buttons';


export default async function Seller({ user_id }: { user_id: number }) {
 
  const [ seller ] = await Promise.all([
    
    fetchSellerData(user_id) 
  ]);

  if (!seller ) {
    return null; 
  }

  return (
    <div className="flex flex-col rounded-lg border-theme-rust border-2 p-3 items-center mx-auto">
      {/* Render the seller logo image */}
      <div className="flex items-center justify-center w-full h-40 overflow-hidden">
      <Image
        className="rounded-md"
        src={seller.shop_logo} 
        width={187}
        height={187}
        alt={seller.shop_name}
      />
      </div>
      {/* Render seller shop name */}
      <h3 className="text-center text-sm p-1 ">
          {seller && seller.shop_name} {/* Ensure seller is not null before accessing its properties */}
      </h3>
      {/* Render Details page */}
      <SellerDetails id={user_id} />
    </div>
  );
}
