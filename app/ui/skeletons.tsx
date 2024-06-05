import Image from 'next/image';
import { ProductDetails } from './products/buttons';

export function ProductSkeleton() {
  const imageFile = 'https://obn4bxfmc3wjm5to.public.blob.vercel-storage.com/no_image_available-fIvprCOARsb7obf9rVds5Q89bML91J.svg';
  const altText = 'No image available';
  return (
    <div className="grid grid-cols-3 rounded-lg border-theme-rust border-2 p-3 h-full">
      {/* Render the product image */}
      <div className="col-span-3 justify-center w-full  h-40 overflow-hidden">
        <Image
          className="rounded-md justify-self-center col-span-3"
          src={imageFile} 
          width={250}
          height={250}
          alt={altText}
        />
      </div>
      {/* Render product name */}
      <h3 className="text-sm p-1 col-span-3">
        Loading...
      </h3>
      {/* Render product price */}
      <p className="text-theme-dark-teal text-sm font-medium self-center p-1">
        Loading...
      </p>
      {/* Render add to cart button */}
      <div className="flex items-center justify-center w-full text-md overflow-hidden col-span-2 mx-2" >
      <ProductDetails id={0} />
      </div>
    </div>
  );
}


export function ProductsGridSkeleton() {
  return (
    <section className='grid sm:grid-cols-1 mb-10 lg:grid-cols-3 gap-4 col-span-3'>
      <div className='filter-container'>
        <div>Filter by Category:</div>
        <div>
          <select
            name='category-list'
            id='category-list'
            defaultValue=''
          >
            <option value=''>Loading...</option>
          </select>
        </div>
      </div>
      <div className="grid rounded-lg border-4 p-4">
        <form>
          <h4>Sort</h4>
          <select name="" id="">
            <option>Loading...</option>
          </select>
        </form>
      </div>
      <div className='product-list'>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
      </div>
    </section>
  );
}