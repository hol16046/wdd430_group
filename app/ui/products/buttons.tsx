'use client'
import CartPage from '@/app/shopping-cart/(overview)/page';
import Link from 'next/link';
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
        className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-4 py-2.5 col-span-2 self-center justify-self-end">
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
      <Link href="/shopping-cart" passHref>
          <button
              type="button"
              onClick={handleAddToCart}
              className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-4 py-2.5 col-span-2 self-center justify-self-end">
              Add to Cart
          </button>
      </Link>
  );
}