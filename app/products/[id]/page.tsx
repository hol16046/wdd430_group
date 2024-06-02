// Code: ProductPage component
import Header from '../../ui/header/header';
import LargeProduct from '../../ui/products/large-product';
import { DeleteProduct, EditProduct } from '@/app/ui/products/buttons';
import Ratings from '../../ui/ratings';
import { notFound } from 'next/navigation';
import {
  fetchProductData,
  fetchProductImages,
  fetchRatings,
} from '../../lib/data';
import Breadcrumbs from '../../ui/products/breadcrumbs';
import { compareSync } from 'bcrypt';
import Footer from '@/app/ui/footer';


export async function generateMetadata({ params }: { params: { id: number } }) {
  const product = await fetchProductData(params.id);
  return {
    title: `${product.name} Details`,
  };
}

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

  // console.log(product);
  // console.log(images);
  // console.log(ratings);
  return (
    <main className='font-red-hat'>
      <Header />
      <div className='grid sm:max-w-[80%] sm:mx-auto'>
        <LargeProduct product={product} images={images} />
        <Ratings ratings={ratings} />
          <div className='grid grid-cols-2'>
          {/* Show the Edit Product option only if seller is logged in and the product belongs to the seller */}
          <EditProduct id={id} />
          {/* Show the Delete Product option only if seller is logged in and the product belongs to the seller */}
          <DeleteProduct product={product} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
