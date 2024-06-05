import Header from '../ui/header/header';
import Footer from '../ui/footer'
import SellerProductsWrapper from '../ui/seller/seller-wrapper';
import { SessionProvider } from 'next-auth/react';



export default function Home(id) {
  return (
    <SessionProvider >
    <main className='font-red-hat mx-auto'>
      <Header />
      <div className='container grid grid-cols-1 lg:grid-cols-5 gap-4 mx-auto w-full p-4'>
        {/* @ts-expect-error Server Component */}
        <SellerProductsWrapper id={id} />
      </div>
      <Footer />
    </main>
    </SessionProvider>
  );
}