import { notFound } from 'next/navigation';
import NewProductForm from '@/app/ui/products/add-new-product-form';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import { Metadata } from "next";
import { useSearchParams } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Upload Image',
  };


 
export default async function AddNewProductPage(props) {
  const url = props.searchParams;
  const sellerId = parseInt(url.id);

  if (!sellerId) {
    notFound();
  }

  return (
    <main className="font-red-hat">
      <Header />
      <NewProductForm sellerId={sellerId} />
      <Footer />
    </main>
  )
}