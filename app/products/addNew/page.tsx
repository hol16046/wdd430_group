import Header from '../../ui/header/header';
import { Metadata } from 'next';
import Form from '../../ui/products/new-form';

export const metadata: Metadata = {
  title: 'Add New Product',
};


export default async function AddNewProduct({ params }: { params: { id: number } }) {
  const sellerId = 3;
  
  return (
    <main>
      <Header />
      <div className="px-5">
        <h1 className="font-playfair font-semibold text-xl pb-4">Add New Product</h1>
      </div>
      <Form id={sellerId}/>
    </main>
  );
}