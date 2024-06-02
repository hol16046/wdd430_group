import { fetchSellerById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import NewProductForm from '@/app/ui/products/add-new-product-form';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import { SelectSeller } from '@/app/lib/definitions';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Upload Image',
  };


 
export default async function AddNewProductPage() {
  const seller: SelectSeller = await fetchSellerById(2);

  if (!seller) {
    notFound();
  }

  return (
    <main className="font-red-hat">
      <Header />
      <NewProductForm seller={seller} />
      <Footer />
    </main>
  )
}