'use client';

import { useRef, useEffect } from 'react';
import { editSeller } from '@/app/lib/action';
import { useFormState } from 'react-dom';
import { SelectSeller } from '@/app/lib/definitions';
import Link from 'next/link';

export default function EditSellerForm({ seller }: { seller: SelectSeller }) {
  const initialState = { key: '', message: '', errors: undefined };
  const editSellerProfile = editSeller.bind(null, seller.id);
  const [state, dispatch] = useFormState(editSellerProfile, initialState);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.key === 'success') {
      form.current?.reset();
    }
  });

  return (
    <div className='grid grid-cols-1 gap-2 p-3 sm:p-4 mx-auto sm:max-w-[80%]'>
      <h1 className='font-playfair text-xl self-center justify-self-center'>
        Edit Shop Name: {seller.shop_name}
      </h1>

      <form
        className='grid grid-cols-5 auto-rows-auto justify-self-center gap-1 w-full'
        action={dispatch}
        ref={form}>
        <label
          htmlFor='name'
          className='col-span-5 text-sm font-medium justify-self-start self-center'>
          Shop Name:
        </label>
        <input
          id='name'
          name='name'
          type='text'
          className='bg-theme-white border border-theme-dark-teal text-sm rounded-lg focus:outline-none focus:ring-theme-rust focus:border-theme-rust focus:border-2 block w-full p-1 col-span-5 justify-self-center self-center placeholder:text-gray-600'
          defaultValue={seller.shop_name}
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
          htmlFor='story'
          className='col-span-5 text-sm font-medium justify-self-start self-center'>
          Biography:
        </label>
        <textarea
          id='story'
          name='story'
          defaultValue={seller.shop_story}
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
        <div className='col-span-5 grid grid-cols-5'>
          <Link
            href={`/profile`}
            className='form-btn col-span-2 mt-2 self-center justify-self-start'>
            Back to Profile
          </Link>
          <button
            type='submit'
            className='form-btn col-span-3 mt-2 self-center justify-self-end'>
            Update Profile
          </button>
        </div>
      </form>
      <div className='justify-self-center text-theme-rust font-semibold text-2xl'>
        <p>{state?.message}</p>
      </div>
    </div>
  );
}

