import Image from 'next/image';


export function IndProductSkeleton() {
  return (
    <div className="grid grid-cols-3 rounded-lg border-theme-rust border-2 p-3" >
        <Image className="rounded-md justify-self-center col-span-3" src={"/black-earrings.webp"} width={250} height={250} alt="Product Image"/>
        <h3 className="text-md p-1 col-span-3"><a href="#" className="hover:text-theme-rust">Product Name</a></h3>
        <p className="text-theme-dark-teal text-md font-medium self-center p-1">$0.00</p>
        <button type="button" className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-5 py-2.5 col-span-2 self-center justify-self-end">Add to Cart</button>
    </div>
  );
}

export function ProductsGridSkeleton() {
  return(
    <section className='mx-auto mb-10 w-[80%] grid gap-4 sm:grid-cols-3 sm:col-span-3'>
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index + 1}> 
          <IndProductSkeleton />
        </div>
      ))}
    </section>
  );
}