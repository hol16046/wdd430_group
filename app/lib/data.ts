import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore} from 'next/cache';
import { SelectProduct, SelectProductImage, SelectRating } from '../lib/definitions';


export async function fetchProductData(id: number) {
  noStore();
  try {
    console.log ('Fetching product data');

    const product_data = await sql<SelectProduct>`
      SELECT
        products.id,
        products.seller_id,
        products.name,
        products.description,
        products.price,
        products.stock
      FROM products
      WHERE products.id = ${id}`;

    const product = product_data.rows.map((product) => ({
      ...product,
    }));
    console.log(product[0]);
    return product[0];
  } catch (error) {
    throw new Error('Failed to fetch product data.');
  }
}

export async function fetchProductImages(id: number) {
  noStore();
  try {
    const data = await sql<SelectProductImage>`
      SELECT
        product_images.id,
        product_images.product_id,
        product_images.image_file,
        product_images.alt_text
      FROM product_images
      WHERE product_images.product_id = ${id}`;

    const productImages = data.rows.map((productImage) => ({
      ...productImage,
    }));
    return productImages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the product images.');
  }
}

export async function fetchRatings(id: number) {
  noStore();
  try {
    const data = await sql<SelectRating>`
      SELECT
        ratings.id,
        ratings.product_id,
        ratings.user_id,
        ratings.rating,
        ratings.review
      FROM ratings
      WHERE ratings.product_id = ${id}`;

    const ratings = data.rows.map((rating) => ({
      ...rating,
    }));
    return ratings;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the product ratings.');
  }
}