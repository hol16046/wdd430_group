// Code: DeletedProductPage component

import Header from '../ui/header/header';
import { Suspense } from 'react';
import LargeProduct from '../ui/products/large-product';
import ProductsGrid from '../ui/products/products-grid';
import Ratings from '../ui/ratings';
import Footer from '../ui/footer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Message from '../ui/products/message';
import dynamic from 'next/dynamic';

const DynamicDeletedMessage = dynamic(() => import('../ui/products/message'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Product Page',
};



export default async function DeletedProductPage() {

  return (
    <main className='font-red-hat'>
      <Header />
      <div className="grid">
        <DynamicDeletedMessage />
      </div>
      <ProductsGrid />
      <Footer />
    </main>
  );
}
