'use client';
 
import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';
import { SelectProduct } from '@/app/lib/definitions';
 
export default function AvatarUploadPage({products}: {products: SelectProduct[]}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const productId = useRef<HTMLOptionElement>(null);
  const altText = useRef<HTMLTextAreaElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <>
      <h1>Upload Your Avatar</h1>
 
      <form
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
          
          if (response.status === 201) {
            alert('Product added successfully');
          }

          if (!response.ok) {
            throw new Error('Failed to upload image');
          }
        }}
      >
        <h2 className="font-playfair col-span-5 self-center text-lg">Step 1:</h2>
         <input name="file" ref={inputFileRef} type="file" className='file:focus:outline-none file:text-white file:bg-theme-dark-teal file:hover:bg-theme-rust file:focus:ring-4 file:focus:ring-theme-orange file:font-medium file:rounded-md file:text-sm file:px-2.5 file:py-2.5 col-span-2 justify-self-start self-center' required />
        <h2 className="font-playfair col-span-5 self-center text-lg">Step 2:</h2>
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
          <option value="" className='text-gray-500' disabled>
            Select a product
          </option>
          {products.map((product) => (
            <option key={product.id} value={product.id} ref={productId}>
              {product.name}
            </option>
          ))}
        </select>
        <textarea name="alt_text" key='alt_text' ref={altText}placeholder="Please enter an image description" className="w-[95%] col-span-5 border-2 border-theme-rust justify-self-center rounded-md p-1 text-sm placeholder:font-red-hat"></textarea>
        <button type="submit" className='focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-4 py-2.5 col-start-5 row-end-7 self-center justify-self-end'>Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}