import { fetchSellerById, fetchProductData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import EditSellerForm from '@/app/ui/seller/edit-seller-form';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import { SelectSeller } from '@/app/lib/definitions';
 
export default async function EditProductPage({ params }: { params: { artistId: number }}) {
  const id = params.artistId;
  const seller = await fetchSellerById(1);

  if (!seller) {
    notFound();
  }

  return (
    <main className="font-red-hat">
      <Header />
      <EditSellerForm seller={seller} />
      <Footer />
    </main>
  )
}