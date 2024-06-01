import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer";
import SellerProfile from "@/app/ui/artists/seller-profile";
import { fetchSellerData, fetchUserData } from "@/app/lib/data";
import { notFound } from "next/navigation";
import React from 'react';

export async function generateMetadata({ params }: { params: {artistId: number } }) {
  const id = params.artistId;
  const seller = await fetchSellerData(id);
  return {
    title: seller.shop_name
  };
}

  export default async function ArtistBioPage({
    params,
  }: {
    params: { artistId: number };
  }) {
    const id = params.artistId;
    const user_id = params.artistId;
  
    // Fetch user and seller data
    const [user, seller] = await Promise.all([
      fetchUserData(id),
      fetchSellerData(user_id),
    ]);
  
    //Handle the case when user data is not found
    if (!user) {
      notFound();
    }
  
    return (
      <>
        <Header />
        <div className="flex justify-center gap-4 mx-auto mb-4">
          {/* Render SellerProfile component with user and seller data */}
          <SellerProfile user={user} seller={seller} />
        </div>
        <Footer />
      </>
    );
  }
  