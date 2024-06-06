import { notFound } from 'next/navigation';
import NewProductForm from '@/app/ui/products/add-new-product-form';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import { Metadata } from "next";
import { useSearchParams } from 'next/navigation';
import { auth } from '@/auth';
import Link from 'next/link';
import { fetchSellerById } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Upload Image',
  };


 
export default async function AddNewProductPage(props) {
  const url = props.searchParams;
  const sellerId = parseInt(url.id);
  const seller = await fetchSellerById(sellerId);


  if (!sellerId) {
    notFound();
  }

  const session = await auth(); 
  const id = parseInt(session?.user?.id);
    if (!session || !session?.user || id !== seller.user_id) {
        return (
            <main className='mx-auto font-red-hat'>
                <Header/>
                <div className='grid mx-auto py-5 h-[100vw] sm:h-[65vw] md:h-[30vw] w-[80%]'>
                    <div className='col-span-full self-center justify-self-center font-semibold text-center text-2xl text-theme-rust'>Sorry, you are not authorized to view this page.</div>
                    <Link
                        href={`/profile`}
                        className='form-btn col-span-full mt-2 self-center justify-self-center'>
                        Back to Profile
                    </Link>
                </div>
                <Footer />

            </main>
        );
    }

  return (
    <main className="font-red-hat">
      <Header />
      <NewProductForm sellerId={sellerId} />
      <Footer />
    </main>
  )
}