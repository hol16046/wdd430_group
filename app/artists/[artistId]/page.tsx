import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer";
import SellerProfile from "@/app/ui/artists/seller-profile";
import { fetchSellerById, fetchSellerData, fetchUserData } from "@/app/lib/data";
import { notFound } from "next/navigation";
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next'

// Dynaimically generate the metadata for each page
type Props = {
  params: { artistId: number }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.artistId
  // fetch product data
  const seller = await fetchSellerData(id)
  return {
    title: seller.shop_name,
    description: seller.shop_story,

  }
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
  