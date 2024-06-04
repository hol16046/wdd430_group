import Features from './ui/features';
import Header from './ui/header/header';
import Footer from './ui/footer'
import ProductsWrapper from './ui/wrapper';



export default function Home() {
  return (
    <main className='font-red-hat'>
      <Header />
      <div className='container grid sm:grid-cols-1 lg:grid-cols-5 gap-4 !w-auto lg:w-auto ml-10 mr-10'>
        <ProductsWrapper />
        <aside className='hidden sm:grid' id='featured'>
          {/* @ts-expect-error Server Component */}
          <Features />
        </aside>
      </div>
      <Footer />
    </main>
  );
}
