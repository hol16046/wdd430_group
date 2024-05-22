import Filter from './ui/filter';
import Features from './ui/features';
import ProductsGrid from './ui/products/products-grid';
import Header from './ui/header/header';
import Footer from './ui/footer'
import { Suspense } from 'react';
import { ProductsGridSkeleton } from './ui/skeletons';

export default function Home() {
  return (
    <main className='font-red-hat'>
      <Header />
      <div className='container grid sm:grid-cols-5 sm:gap-4 sm:ml-10'>
        <aside id='filters' className='hidden sm:grid'>
        <Filter />
        </aside>
        <Suspense fallback={<ProductsGridSkeleton /> }>
          <ProductsGrid />
        </Suspense>
        <aside className='hidden sm:grid' id='featured'>
          <Features />
        </aside>
      </div>
      <Footer />
    </main>
  );
}
