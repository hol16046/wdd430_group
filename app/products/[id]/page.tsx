import Header from '../../ui/header/header';
import LargeProduct from '../../ui/products/large-product';
import { DeleteProduct, EditProduct } from '@/app/ui/products/buttons';
import Ratings from '../../ui/ratings';
import { notFound } from 'next/navigation';
import {
  fetchProductData,
  fetchProductImages,
  fetchProductKeyword,
  fetchRatings,
  fetchKeyword,
  fetchSellerData,
} from '../../lib/data';
import Footer from '@/app/ui/footer';
import { Metadata, ResolvingMetadata } from 'next';
import { auth } from '@/auth';
import Link from 'next/link';

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
  const session = await auth(); 
  const sellerId = parseInt(session?.user?.id);
  const [product, images, ratings] = await Promise.all([
    fetchProductData(id),
    fetchProductImages(id),
    fetchRatings(id),
  ]);
  var sellerIsLoggedIn = false;
  

  if (!product) {
    notFound();
  }
  if (sellerId) {
    const seller = await fetchSellerData(sellerId);
    if (!session || !session?.user || product.seller_id !== seller.id) { 
      sellerIsLoggedIn = false; 
    } else {
      sellerIsLoggedIn = true;
    }
  }
  
    


  return (
    <main className='font-red-hat'>
      <Header />
      <div className='grid sm:w-[80%] md:w-[80%] sm:mx-auto'>
        <LargeProduct product={product} images={images} />
        <div className='px-3'>
          <Ratings ratings={ratings} productId={id}/>
        </div>
        <div className='grid grid-cols-2'>
          {/* Show the Edit and Delete Product options only if seller is logged in and the product belongs to the seller */}
          {(sellerIsLoggedIn) ?
            <>
              <EditProduct id={id} />
              <DeleteProduct product={product} />
            </> : null } 
        </div>
      </div>
      <Footer />
    </main>
  
  );
}
