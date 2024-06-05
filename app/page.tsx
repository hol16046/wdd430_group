import Features from './ui/features';
import Header from './ui/header/header';
import Footer from './ui/footer'
import ProductsWrapper from './ui/products/wrapper';



export default function Home() {
  return (
    <main className='font-red-hat mx-auto'>
      <Header />
      <div className='container grid grid-cols-1 lg:grid-cols-5 gap-4 mx-auto w-full p-4'>
        {/* @ts-expect-error Server Component */}
        <ProductsWrapper />
        <aside className='grid-wrap grid-cols-2 w-full mb-1 col-span-2  lg:row-start-1 lg:col-end-6 lg:col-span-1' id='featured'>
          {/* @ts-expect-error Server Component */}
          <Features />
        </aside>
      </div>
      <Footer />
    </main>
  );
}
