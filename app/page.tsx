import Filter from './ui/filter';
import Features from './ui/features';
import ProductsGrid from './ui/products/products-grid';
import Header from './ui/header/header';
import Footer from './ui/footer'



export default function Home() {
  return (
    <main className='font-red-hat'>
      <Header />
      <div className='container grid grid-cols-1 lg:grid-cols-5 gap-4 !w-auto lg:w-auto mx-10 mb-5'>
        <aside id='filters' className='hidden sm:grid'>
        <Filter />
        </aside>
        <ProductsGrid />
        <aside className='hidden sm:grid' id='featured'>
          {/* @ts-expect-error Server Component */}
          <Features />
        </aside>
      </div>
      <Footer />
    </main>
  );
}
