'use client';
 
import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';
import { SelectProduct } from '@/app/lib/definitions';
 
export default function ImageUploadForm({products}: {products: SelectProduct[]}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const productId = useRef<HTMLOptionElement>(null);
  const altText = useRef<HTMLTextAreaElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <div className='grid grid-cols-1 gap-2 p-2 mx-auto md:max-w-[80%]'>
      <h1 className="font-playfair text-xl self-center justify-self-center">Upload A New Product Image</h1>
 
      <form
        className=' grid grid-cols-5 auto-rows-auto justify-self-center gap-1'
        onSubmit={async (event) => {
          event.preventDefault();
 
          if (!inputFileRef.current?.files) {
            throw new Error('No file selected');
          }
 
          const file = inputFileRef.current.files[0];
          const product_id = productId.current?.value;
          const alt_text = altText.current?.value;
 
          const response = await fetch(
            `/api/products/new_img/upload?filename=${file.name}&product_id=${product_id}&alt_text=${alt_text}`,
            {
              method: 'POST',
              body: file,
            },
          );
 
          const newBlob = (await response.json()) as PutBlobResult;
 
          setBlob(newBlob);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" className='ml-2.5 sm:ml-3 md:ml-5 lg:ml-6 file:focus:outline-none file:text-white file:bg-theme-dark-teal file:hover:bg-theme-rust file:focus:ring-4 file:focus:ring-theme-orange file:font-medium file:rounded-md file:text-sm file:px-2.5 file:py-2.5 col-span-2 justify-self-start self-center' required />
        <p className="text-sm col-span-5 justify-self-center">Maximum file size: 4.5 MB</p>
        
         <label htmlFor="product" className="sr-only">
           Product
         </label>
         <select
          id="prdouct"
          name="product_id"
          className="w-[95%] cursor-pointer rounded-md border-2 border-theme-rust p-1 my-2 text-sm outline-2 placeholder:text-gray-500 col-span-5 self-center justify-self-center"
          defaultValue=''
          aria-describedby="product-error"
        >
          <option value="" className="text-gray-600" disabled>
            Select a product
          </option>
          {products.map((product) => (
            <option key={product.id} value={product.id} ref={productId}>
              {product.name}
            </option>
          ))}
        </select>
        <textarea name="alt_text" key='alt_text' ref={altText}placeholder="Please enter an image description" className="w-[95%] col-span-5 border-2 border-theme-rust justify-self-center rounded-md p-1 text-sm placeholder:font-red-hat placeholder:text-gray-600"></textarea>
        <button type="submit" className='mr-2.5 sm:mr-3 md:mr-5 lg:mr-6 form-btn col-start-5 row-end-7 self-center justify-self-end'>Upload</button>
      </form>
      {blob && (
        <div className="justify-self-center text-theme-rust font-semibold text-2xl">
          <p>Image uploaded successfully!</p>
        </div>
      )}
    </div>
  );
}
