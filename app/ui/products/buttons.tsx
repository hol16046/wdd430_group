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
    <form action={deleteProductWithId}>
      <button className="form-btn">
        Delete Product
      </button>
    </form>
  );
}