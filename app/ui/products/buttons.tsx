import Link from 'next/link';

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