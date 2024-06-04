'use client';

import { useRef, useEffect } from 'react';
import { editProduct } from '@/app/lib/action';
import { useFormState } from 'react-dom';
import { SelectSeller, SelectProduct } from '@/app/lib/definitions';
import Link from 'next/link';

export default function EditProductForm({ seller, product }: { seller: SelectSeller, product: SelectProduct }) {
  const initialState = { key: '', message: '', errors: undefined };
  const editProductWithSellerId = editProduct.bind(null, product.id);
  const [state, dispatch] = useFormState(editProductWithSellerId, initialState);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.key === 'success') {
      form.current?.reset();
    }
  });

  return (
    <div className='grid grid-cols-1 gap-2 p-3 sm:p-4 mx-auto sm:max-w-[80%]'>
      <h1 className='font-playfair text-xl self-center justify-self-center'>
        Edit Product: {product.name}
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
          defaultValue={product.name}
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
          defaultValue={product.description}
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
          defaultValue={product.price}
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
          defaultValue={product.stock}
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
        <Link
          href={`/products/${product.id}`}
          className='form-btn col-span-2 mt-2 self-center justify-self-start'>
          Cancel
        </Link>
        <button
          type='submit'
          className='form-btn col-span-3 mt-2 self-center justify-self-end'>
          Update Product
        </button>
      </form>
      <div className='justify-self-center text-theme-rust font-semibold text-2xl'>
        <p>{state?.message}</p>
      </div>
    </div>
  );
}

