import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer";
import SellerProfile from "@/app/ui/artists/seller-profile";
import { Metadata } from "next";
import { fetchSellerData, fetchUserData } from "@/app/lib/data";
import { notFound } from "next/navigation";
import React from 'react';

export const metadata: Metadata = {
    title: 'Artist Bio Page',
  };

  export default async function ArtistBioPage({
    params,
  }: {
    params: { artistId: number };
  }) {
    const id = params.artistId;
    const user_id = params.artistId;
    console.log(params, "params seller id from click");
  
    // Fetch user and seller data
    const [user, seller] = await Promise.all([
      fetchUserData(id),
      fetchSellerData(user_id),
    ]);
  
    // Check if user data is fetched successfully
    console.log(user, "user data");
    console.log(seller, "seller data");
  
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
  