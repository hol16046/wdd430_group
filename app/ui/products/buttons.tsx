import Link from 'next/link';
import { deleteProduct } from '../../lib/action';
import { SelectProduct } from '../../lib/definitions';

export function ProductDetails({ id }: { id: number }) {
  return (
    <Link
      href={`/products/${id}`} passHref legacyBehavior> 
      <button
        type="button"
        className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-4 py-2.5 col-span-2 self-center justify-self-end">
        View Details
      </button>
    </Link>    
  );
}

export function DeleteProduct({ product }: { product: SelectProduct }) {
  const deleteProductWithId = deleteProduct.bind(null, product.id);
  return (
    <form action={deleteProductWithId} className='grid mb-3 sm:mx-auto pr-3 w-full'>
      <button className="form-btn justify-self-end self-center col-span 1 md:justify-self-center">
        Delete Product
      </button>
    </form>
  );
}

export function EditProduct({ id }: { id: number }) {
  return (
    <div className='grid pl-3 mb-3 sm:mx-auto w-full'>
      <Link
        href={`/products/${id}/edit/`} passHref legacyBehavior> 
        <button
          type="button"
          className="form-btn self-center col-span-1 justify-self-start md:justify-self-center">
          Edit Product
        </button>
      </Link>  
    </div>  
  );
}