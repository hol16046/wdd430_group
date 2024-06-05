import Header from '../ui/header/header';
import Footer from '../ui/footer'
import SellerProductsWrapper from '../ui/seller/seller-wrapper';
import { SessionProvider } from 'next-auth/react';
import { EditProfile } from '../ui/seller/buttons';




export default function Home() {

  const id = '5';
  const role: string = 'seller';

  return (
    <main className='font-red-hat mx-auto'>
      <Header />
      <div className='md:container mx-auto grid gap-1 sm:grid-cols-2'>
          <h1 className='font-red-hat text-xl font-semibold self-center justify-self-center'>Welcome Scott Lang!</h1>
          {role === 'seller' ? <EditProfile id={id} /> : (null)}
      </div>
      
      <div className='container grid grid-cols-1 lg:grid-cols-5 gap-4 mx-auto w-full p-4'>
        {/* @ts-expect-error Server Component */}
        {role === 'seller' ? <SellerProductsWrapper id={id} />  : (null)}
      </div>
      <Footer />
    </main>
  );
}