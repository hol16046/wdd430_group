
// import { NextResponse } from 'next/server';
// import { addProduct } from '@/app/lib/action';
 
// export async function POST(request: Request): Promise<NextResponse> {
//   const { searchParams } = new URL(request.url);
//   const sellerId = searchParams.get('seller_id');
//   let seller_id = null;
//   const name = searchParams.get('name');
//   const description = searchParams.get('description');
//   const newPrice = searchParams.get('price');
//   let price = null;
//   const newStock = searchParams.get('stock');
//   let stock = null;

//   // if (sellerId != null) {
//   //   seller_id = parseInt(sellerId);
//   // }
//   // if (newPrice != null) {
//   //   price = parseInt(newPrice);
//   // }
//   // if (newStock != null) {
//   //   stock = parseInt(newStock);
//   // }

//   if (seller_id === null) {
//     throw new Error('Seller ID is invalid');
//   }
//   if (name === null) {
//     throw new Error('Product name is required');
//   }
//   if (description === null) {
//     throw new Error('Product description is required');
//   }
//   if (price === null) {
//     throw new Error('Product price is required');
//   }
//   if (stock === null) {
//     throw new Error('Product stock is required');
//   }
  

//   if (!seller_id || !name || !description || !price || !stock) {
//     throw new Error('Missing fields');
//   }
//   try {
//     await addProduct(seller_id, name, description, price, stock);
//   } catch (error) {
//     throw new Error('Could not add product.');
//   }

 
//   return NextResponse.json({ }, {
//     status: 201,
//   })
// }

