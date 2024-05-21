import Header from './ui/header/header';
import Filter from './ui/filter';
import Features from './ui/features';
import ProductsGrid from './ui/products/products-grid';
import Footer from './ui/footer';

export default function Home() {
  return (
    <main className='font-red-hat'>
      <Header />

      <div className='container grid sm:grid-cols-5 sm:gap-4 sm:ml-10'>
        <aside id='filters' className='hidden sm:grid'>
          <Filter />
        </aside>

        <ProductsGrid />

        <aside className='hidden sm:grid' id='featured'>
          <Features />
        </aside>
      </div>
      <Footer />
    </main>
  );
}
