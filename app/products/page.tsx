// Code: DeletedProductPage component

import Header from '../ui/header/header';
import { Suspense } from 'react';
import LargeProduct from '../ui/products/large-product';
import ProductsGrid from '../ui/products/products-grid';
import Ratings from '../ui/ratings';
import Footer from '../ui/footer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
  fetchProductData,
  fetchProductImages,
  fetchRatings,
} from '../lib/data';
import { DeleteProduct } from '../ui/products/buttons';
import Breadcrumbs from '../ui/products/breadcrumbs';
import { compareSync } from 'bcrypt';
import {
  SelectProduct,
  SelectProductImage,
  SelectRating,
} from '../lib/definitions';
import Message from '../ui/products/message';

//How can we show the product name as the title of the page?
export const metadata: Metadata = {
  title: 'Product Page',
};



export default async function DeletedProductPage() {

  return (
    <main className='font-red-hat'>
      <Header />
      <div className="grid">
        <Message />
      </div>
      <ProductsGrid />
      <Footer />
    </main>
  );
}
