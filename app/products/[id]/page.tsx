// Code: ProductPage component
import Header from '../../ui/header/header';
import { Suspense } from 'react';
import LargeProduct from '../../ui/products/large-product';
import Ratings from '../../ui/ratings';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  fetchProductData,
  fetchProductImages,
  fetchRatings,
} from '../../lib/data';
import Breadcrumbs from '../../ui/products/breadcrumbs';
import { compareSync } from 'bcrypt';
import {
  SelectProduct,
  SelectProductImage,
  SelectRating,
} from '../../lib/definitions';

//How can we show the product name as the title of the page?
export const metadata: Metadata = {
  title: 'Product Page',
};

export default async function ProductPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const [product, images, ratings] = await Promise.all([
    fetchProductData(id),
    fetchProductImages(id),
    fetchRatings(id),
  ]);

  if (!product) {
    notFound();
  }

  console.log(product);
  console.log(images);
  console.log(ratings);
  return (
    <main className='font-red-hat'>
      <Header />
      <LargeProduct product={product} images={images} />
      <Ratings ratings={ratings} />
    </main>
  );
}
