
import SellerGrid from '../ui/artists/seller-grid';
import Header from '../ui/header/header';
import Footer from '../ui/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Meet the Artists',
  };

export default function ArtistsPage(){
  return (
    <>
    <Header />
    <h1 className="text-center bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-8">Meet the Artists</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {/* @ts-expect-error Server Component */}
      <SellerGrid />
    </div>
    <Footer />
    </>
  );
};

