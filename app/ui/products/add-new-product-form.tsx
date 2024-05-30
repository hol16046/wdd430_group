'use client';

import { useRef, useEffect } from 'react';
import { addProduct } from '@/app/lib/action';
import { useFormState } from 'react-dom';
import { SelectSeller } from '@/app/lib/definitions';

export default function NewProductForm({ seller }: { seller: SelectSeller }) {
  const initialState = { key: '', message: '', errors: undefined };
  const addProductWithSellerId = addProduct.bind(null, seller.id);
  const [state, dispatch] = useFormState(addProductWithSellerId, initialState);
  // const sellerId = seller.id;
  // const name = useRef<HTMLInputElement>(null);
  // const description = useRef<HTMLTextAreaElement>(null);
  // const price = useRef<HTMLInputElement>(null);
  // const stock = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.key === 'success') {
      form.current?.reset();
    }
  });

  return (
    <div className='grid grid-cols-1 gap-2 p-3 sm:p-4 mx-auto sm:max-w-[80%]'>
      <h1 className='font-playfair text-xl self-center justify-self-center'>
        Add a New Product
      </h1>

      <form
        className='grid grid-cols-5 auto-rows-auto justify-self-center gap-1 w-full'
        action={dispatch}
        ref={form}>
        <label
          htmlFor='name'
          className='col-span-5 text-sm font-medium justify-self-start self-center'>
          Product Name:
        </label>
        <input
          id='name'
          name='name'
          type='text'
          className='bg-theme-white border border-theme-dark-teal text-sm rounded-lg focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 block w-full p-1 col-span-5 justify-self-center self-center placeholder:text-gray-600'
          placeholder='Nature&#39;s Glow Candle'
          aria-describedby='name-error'
        />
        <div id='name-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className='mt=2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>
        <label
          htmlFor='description'
          className='col-span-5 text-sm font-medium justify-self-start self-center'>
          Product Description:
        </label>
        <textarea
          id='description'
          name='description'
          placeholder='Illuminate your space with the warm, flickering light of our Nature&#39;s Glow Candle. Handcrafted with care...'
          className='w-full block bg-theme-white col-span-5 border border-theme-dark-teal focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 justify-self-center rounded-md p-1 text-sm placeholder:font-red-hat placeholder:text-gray-600'
          aria-describedby='description-error'></textarea>
        <div id='description-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.description &&
            state.errors.description.map((error: string) => (
              <p className='mt=2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>
        <label
          htmlFor='price'
          className='col-span-5 sm:col-span-1 sm:col-start-1 text-sm font-medium justify-self-start self-center'>
          Product Price:
        </label>
        <input
          id='price'
          name='price'
          type='number'
          step='0.01'
          className='bg-theme-white border border-theme-dark-teal text-sm rounded-lg focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 block w-full p-1 col-span-5 sm:col-span-2 sm:col-end-4 justify-self-center self-center text-right placeholder:text-gray-600 placeholder:text-right'
          placeholder='29.99'
          aria-describedby='price-error'
        />
        <div id='price-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.price &&
            state.errors.price.map((error: string) => (
              <p className='mt=2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>
        <label
          htmlFor='stock'
          className='col-span-5 sm:col-span-1 sm:col-start-1 text-sm font-medium justify-self-start self-center'>
          Product Stock:
        </label>
        <input
          id='stock'
          name='stock'
          type='number'
          step='1'
          className='bg-theme-white border border-theme-dark-teal text-sm rounded-lg focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 block w-full p-1 col-span-5 sm:col-span-2 sm:col-end-4 justify-self-center self-center text-right placeholder:text-gray-600 placeholder:text-right'
          placeholder='10'
          aria-describedby='stock-error'
        />
        <div id='stock-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.stock &&
            state.errors.stock.map((error: string) => (
              <p className='mt=2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>

        <button
          type='submit'
          className='form-btn col-span-5 mt-2 self-center justify-self-end'>
          Add Product
        </button>
      </form>
      <div className='justify-self-center text-theme-rust font-semibold text-2xl'>
        <p>{state?.message}</p>
      </div>
    </div>
  );
}

// return (
//   <div className='grid grid-cols-1 gap-2 p-3 sm:p-4 mx-auto sm:max-w-[80%]'>
//     <h1 className="font-playfair text-xl self-center justify-self-center">Add a New Product</h1>

//     <form
//       className='grid grid-cols-5 auto-rows-auto justify-self-center gap-1 w-full'
//       onSubmit={async (event) => {
//         event.preventDefault();

//         if (!sellerId || !name.current?.value || !description.current?.value || !price.current?.value || !stock.current?.value) {
//           throw new Error('Missing fields');
//         }

//         const seller_id = sellerId;
//         const newName = name.current?.value;
//         const newDescription = description.current?.value;
//         const newPrice = price.current?.value;
//         const newStock = stock.current?.value;

//         const response = await fetch(
//           `/api/products/new/upload?seller_id=${seller_id}&name=${newName}&description=${newDescription}&price=${newPrice}&stock=${newStock}`,
//           {
//             method: 'POST',
//             body: newName,
//           },
//         );

//         if (response.status === 201) {
//           success = true;
//         }

//       }}
//     >
//       <label htmlFor="product_name" className="col-span-5 text-sm font-medium justify-self-start self-center">
//         Product Name:
//       </label>
//       <input name="product_name" ref={name} type="text" className='bg-theme-white border border-theme-dark-teal text-sm rounded-lg focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 block w-full p-1 col-span-5 justify-self-center self-center placeholder:text-gray-600' placeholder='Nature&#39;s Glow Candle' required />
//       <label htmlFor="product_description" className="col-span-5 text-sm font-medium justify-self-start self-center">
//         Product Description:
//       </label>
//       <textarea name="product_description" ref={description} placeholder="Illuminate your space with the warm, flickering light of our Nature&#39;s Glow Candle. Handcrafted with care..." className="w-full block bg-theme-white col-span-5 border border-theme-dark-teal focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 justify-self-center rounded-md p-1 text-sm placeholder:font-red-hat placeholder:text-gray-600"></textarea>
//       <label htmlFor="product_price" className="col-span-5 text-sm font-medium justify-self-start self-center">
//         Product Price:
//       </label>
//       <input name="product_price" ref={price} type="text" className='bg-theme-white border border-theme-dark-teal text-sm rounded-lg focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 block w-full p-1 col-span-5 justify-self-center self-center placeholder:text-gray-600' placeholder='29.99' required />
//       <label htmlFor="product_stock" className="col-span-5 text-sm font-medium justify-self-start self-center">
//         Product Stock:
//       </label>
//       <input name="product_stock" ref={stock} type="text" className='bg-theme-white border border-theme-dark-teal text-sm rounded-lg focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 block w-full p-1 col-span-5 justify-self-center self-center placeholder:text-gray-600' placeholder='10' required />

//       <button type="submit" className='form-btn col-span-5 row-end-12 self-center justify-self-end'>Add Product</button>
//     </form>
//     {success === true && (
//       <div className="justify-self-center text-theme-rust font-semibold text-2xl">
//         <p>Product added successfully!</p>
//       </div>
//     )}
//   </div>
// );
// }
