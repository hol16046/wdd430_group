
import { NextResponse } from 'next/server';
import { addProductImage } from '@/app/lib/action';
 
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const product_id = searchParams.get('product_id');
  let productId = null;
  const alt_text = searchParams.get('alt_text');

  if (product_id != null) {
    productId = parseInt(product_id);
  }
  
  console.log(process.env.BLOB_READ_WRITE_TOKEN);


  if (filename === null) {
    throw new Error('filename is required');
  }

  if (request.body === null) {
    throw new Error('filename is required');
  }
  

  if (!filename || !alt_text || !productId) {
    throw new Error('Missing fields');
  }
  try {
    await addProductImage(productId, filename, alt_text);
  } catch (error) {
    throw new Error('Could not update product image');
  }

 
  return NextResponse.json({ }, {
    status: 201,
  })
}

