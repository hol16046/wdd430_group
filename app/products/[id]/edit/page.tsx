import { fetchSellerById, fetchProductData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import EditProductForm from '@/app/ui/products/edit-product-form';
import Header from '@/app/ui/header/header';
import Footer from '@/app/ui/footer';
import { SelectSeller } from '@/app/lib/definitions';
 
export default async function EditProductPage({ params }: { params: { id: number }}) {
  const id = params.id;
  const [seller, product] = await Promise.all([
    fetchSellerById(2),
    fetchProductData(id),
  ]);

  if (!product || !seller) {
    notFound();
  }

  return (
    <main className="font-red-hat">
      <Header />
      <EditProductForm seller={seller} product={product} />
      <Footer />
    </main>
  )
}