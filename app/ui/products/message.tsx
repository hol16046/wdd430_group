'use client'

import { useParams } from 'next/navigation';


export default function Message() {
  const params = new URLSearchParams(document.location.search);
  const deleteMessage = params.get('message');
  console.log(params);

  return (
    <h3 className='text-theme-rust mx-auto font-semibold text-xl justify-self-center pb-4 '>{deleteMessage}</h3>
  );

}