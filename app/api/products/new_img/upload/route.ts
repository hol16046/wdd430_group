import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { addProductImage } from '@/app/lib/action';
 
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const product_id = searchParams.get('product_id');
  let productId = null;
  const alt_text = searchParams.get('alt_text');

  console.log(searchParams);

  if (product_id != null) {
    productId = parseInt(product_id);
  }
  
  //console.log(process.env.BLOB_READ_WRITE_TOKEN);


  if (filename === null) {
    throw new Error('filename is required');
  }

  if (request.body === null) {
    throw new Error('filename is required');
  }
  


  const blob = await put(filename, request.body, {
    access: 'public',
  });

  const image_file = blob.url;

  if (!image_file || !alt_text || !productId) {
    throw new Error('Missing fields');
  }
  try {
    await addProductImage(productId, image_file, alt_text);
  } catch (error) {
    throw new Error('Could not update product image');
  }

 
  return NextResponse.json(blob);
}

