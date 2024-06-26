'use client'
import CartPage from '@/app/shopping-cart/(overview)/page';
import Link from 'next/link';
import { deleteProduct } from '../../lib/action';
import { SelectProduct } from '../../lib/definitions';

interface AddToCartProps {
  product: SelectProduct;
  addToCart: (product: SelectProduct) => void;
}

export function ProductDetails({ id }: { id: number }) {
  return (
    <Link
      href={`/products/${id}`} passHref legacyBehavior> 
      <button
        type="button"
        className="form-btn col-span-2 self-center justify-self-end">
        View Details
      </button>
    </Link>    
  );
}

export function AddToCart({ product, addToCart }: AddToCartProps) {
  const handleAddToCart = () => {
      addToCart(product); // Call addToCart when the "Add to Cart" button is clicked
  };

  return (
      <Link href="/shopping-cart" passHref className='col-end-4 self-center justify-self-end sm:justify-self-center'>
          <button
              type="button"
              onClick={handleAddToCart}
              className="form-btn col-span-2 self-center justify-self-end">
              Add to Cart
          </button>
      </Link>
  );
}

export function DeleteProduct({ product }: { product: SelectProduct }) {
  const deleteProductWithId = deleteProduct.bind(null, product.id);
  return (
    <form 
      onSubmit={(e) => {
      if (!window.confirm('Warning: This Cannot Be Undone! Do you really want to delete this product?')) {
          e.preventDefault();
        }
      }}
      action={deleteProductWithId} 
      className='grid mb-3 sm:mx-auto pr-3 w-full'>
      <button type='submit' className="form-btn justify-self-end self-center col-span 1 md:justify-self-center">
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