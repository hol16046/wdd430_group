import { fetchSellerData, fetchProductData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import EditSellerForm from '@/app/ui/seller/edit-seller-form';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import { SelectSeller } from '@/app/lib/definitions';
import { auth } from '@/auth';
import Link from 'next/link';
 
export default async function EditProductPage({ params }: { params: { artistId: number }}) {
  const id = params.artistId;
  const seller = await fetchSellerData(id);

  if (!seller) {
    notFound();
  }

  const session = await auth(); 
  const sellerId = parseInt(session?.user?.id);
    if (!session || !session?.user || id !== sellerId) {
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
      <EditSellerForm seller={seller} />
      <Footer />
    </main>
  )
}