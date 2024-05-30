'use server'

import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
 
export async function Form() {
  async function uploadImage(formData: FormData) {
    const imageFile = formData.get('image') as File;
    const blob = await put(imageFile.name, imageFile, {
      access: 'public',
    });
    revalidatePath('/');
    return blob;
  }
 
  return (
    <form action={uploadImage}>
      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" required />
      <button>Upload</button>
    </form>
  );
}






// 'use client';

// import { type PutBlobResult } from '@vercel/blob';
// import { useRef, useState } from 'react';
// import { upload } from '@vercel/blob/client';

// export function Form(divId, ref) {
//   const div_id = divId;
//   const inputFileRef = useRef<HTMLInputElement>(null);
//   const [blob, setBlob] = useState<PutBlobResult | null>(null);
//   const img_file = ref;

//   return (
//     <>
//       <h2 className='font-playfair col-span-4 mt-3 text-lg'>Step 1:</h2>
//       <form
//         className='col-span-4 grid grid-cols-5 grid-rows-2'
//         onSubmit={async (event) => {
//           event.preventDefault();
//           if (!inputFileRef.current?.files) {
//             throw new Error('No file selected');
//           }
//           const file = inputFileRef.current.files[0];
//           const newBlob = await upload(file.name, file, {
//             access: 'public',
//             handleUploadUrl: '/api/products/new-img/upload',
//           });
//           setBlob(newBlob);
//         }}>
//         <label htmlFor='file' className='sr-only'>
//           Choose File
//         </label>
//         <input
//           name='file'
//           ref={inputFileRef}
//           type='file'
//           className='file:focus:outline-none file:text-white file:bg-theme-dark-teal file:hover:bg-theme-rust file:focus:ring-4 file:focus:ring-theme-orange file:font-medium file:rounded-md file:text-sm file:px-1 file:py-1 col-span-2 justify-self-start'
//           required
//         />
//         <button
//           type='submit'
//           className='focus:outline-none text-white bg-theme-dark-teal hover:bg-theme-rust focus:ring-4 focus:ring-theme-orange font-medium rounded-md text-sm px-4 py-2.5 col-start-5 row-end-3 self-center justify-self-end'>
//           Upload
//         </button>
//       </form>
//       {blob && (
//         <div id={div_id} ref={img_file} className='hidden'>
//           {blob.url}
//         </div>
//       )}
//     </>
//   );
// }
