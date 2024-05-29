'use client';
 
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
import { useFormState } from 'react-dom';
import { SelectProduct } from '@/app/lib/definitions';
import { addProductImage } from '@/app/lib/action';
 
export default function NewProductImageUploadForm({ products }: { products: SelectProduct[]}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const initialState = { message: null, errors: {} };
  const addNewProductImageWithValues = addProductImage.bind(null);
  const [state, dispatch] = useFormState(addNewProductImageWithValues, initialState);

  return (
    <div className="p-4">
      <h1>Upload New Product Image</h1>
 
      <form
        action = {dispatch}
        // onSubmit={async (event) => {
        //   event.preventDefault();
 
        //   if (!inputFileRef.current?.files) {
        //     throw new Error('No file selected');
        //   }
 
        //   const file = inputFileRef.current.files[0];
 
        //   const newBlob = await upload(file.name, file, {
        //     access: 'public',
        //     handleUploadUrl: '/api/products/new-img/upload',
        //   });
 
        //   setBlob(newBlob);
        //   FormData.image_file = newBlob.url;
        // }}
      >
        <select
          id="prdouct"
          name="product_id"
          className="peer block w-[80%] cursor-pointer rounded-md border-2 border-theme-rust py-2 pl-10 my-2 text-sm outline-2 placeholder:text-gray-500"
          defaultValue={products[0].id}
          aria-describedby="product-error"
        >
          <option value="" disabled>
            Select a product
          </option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <input name="image_file" ref={inputFileRef} type="file" required />
        
        <textarea name="alt_text" className="m-2 border-2 border-theme-rust"></textarea>
        <button type="submit" className="focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-4 py-2.5 col-span-2 self-center justify-self-end">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </div>
  );
}