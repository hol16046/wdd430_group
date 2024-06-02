// Code: ProductPage component
import Header from '../../ui/header/header';
import LargeProduct from '../../ui/products/large-product';
import Ratings from '../../ui/ratings';
import { notFound } from 'next/navigation';
import {
  fetchProductData,
  fetchProductImages,
  fetchProductKeyword,
  fetchRatings,
  fetchKeyword,
} from '../../lib/data';
import Footer from '@/app/ui/footer';
import { Metadata, ResolvingMetadata } from 'next'

// Dynaimically generate the metadata for each page
type Props = {
  params: { id: number }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch product data
  const product = await fetchProductData(id)
  const product_keywords = await fetchProductKeyword(id)

  // Iterate over result to get the keyword values
  const ids = product_keywords.map(item => item.keyword_id)
  
  // Fetch keyword data
  const keywordPromises = ids.map(async (item) => {
    const keywordData = await fetchKeyword(item);
    return keywordData;
  });

  const keywords = await Promise.all(keywordPromises);
 
  return {
    title: product.name,
    description: product.description,
    keywords: keywords.map(item => item[0].keyword),

  }
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
  return (
    <main className='font-red-hat'>
      <Header />
      <LargeProduct product={product} images={images} />
      <Ratings ratings={ratings} />
      <Footer />
    </main>
  
  );
}
