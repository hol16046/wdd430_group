import Link from "next/link";


export function AddNewProduct( id ) {
  const seller = id.id;
  return (
    <div className='grid pl-3 mb-3 sm:mx-auto w-full'>
      <Link
        href={`/products/new/upload/?id=${seller}`} passHref legacyBehavior> 
        <button
          type="button"
          className="form-btn self-center col-span-1 justify-self-start md:justify-self-center">
          Add A New Product
        </button>
      </Link>  
    </div>  
  );
}

export function AddNewProductImage( id ) {
  const seller = id.id;
  return (
    <div className='grid pl-3 mb-3 sm:mx-auto w-full'>
      <Link
        href={`/products/new_img/upload/?id=${seller}`} passHref legacyBehavior> 
        <button
          type="button"
          className="form-btn self-center col-span-1 justify-self-start md:justify-self-center">
          Add A New Product Image
        </button>
      </Link>  
    </div>  
  );
}

export function EditProfile( id ) {
  const seller = id.id;
  return (
    <div className='grid pl-3 mb-3 sm:mx-auto w-full'>
      <Link
        href={`/artists/${seller}/edit`} passHref legacyBehavior> 
        <button
          type="button"
          className="form-btn self-center col-span-1 justify-self-start md:justify-self-center">
          Edit Profile
        </button>
      </Link>  
    </div>  
  );
}