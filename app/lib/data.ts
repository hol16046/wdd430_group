import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore} from 'next/cache';
import { SelectProduct, SelectProductImage, SelectRating, SelectSeller, SelectUser } from '../lib/definitions';


export async function fetchProductData(id: number) {
  noStore();
  try {
    // console.log ('Fetching product data');

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
    // console.log(product[0]);
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

export async function fetchSellerData(id: number) {
  // noStore();
  try {
    console.log (`Fetching seller ${id} data`);

    const seller_data = await sql<SelectSeller>`
      SELECT
        sellers.id,
        sellers.user_id,
        sellers.shop_name,
        sellers.shop_story,
        sellers.shop_logo,
        sellers.shop_profile
      FROM sellers
      WHERE sellers.user_id = ${id}`;

    const seller = seller_data.rows.map((seller) => ({
      ...seller,
    }));
    //console.log(seller[0]);
    return seller[0];
  } catch (error) {
    throw new Error('Failed to fetch seller data.');
  }
}

export async function fetchSellerById(id: number) {
  noStore();
  try {
    //console.log (`Checking for seller ${id} data`);

    const seller_data = await sql<SelectSeller>`
      SELECT
        sellers.id,
        sellers.user_id,
        sellers.shop_name,
        sellers.shop_story,
        sellers.shop_logo,
        sellers.shop_profile
        FROM sellers
        WHERE sellers.id = ${id}`;
      
    const seller = seller_data.rows.map((seller) => ({
      ...seller,
    }));
    //console.log(seller[0]);
    return seller[0];
  } catch (error) {
    throw new Error('Failed to fetch seller data.');
  }
}

export async function fetchUserData(id: number) {
  noStore();
  try {
    console.log (`Fetching User ${id} data`);

    const user_data = await sql<SelectUser>`
      SELECT
        users.id,
        users.role,
        users.f_name,
        users.l_name,
        users.email
      FROM users
      WHERE users.id = ${id}`;

    const user = user_data.rows.map((user) => ({
      ...user,
    }));
    //console.log(user[0]);
    return user[0];
  } catch (error) {
    throw new Error('Failed to fetch user data.');
  }
}

export async function fetchAllProducts() {
  noStore();
  try {
    const data = await sql<SelectProduct>`
      SELECT
        products.id,
        products.seller_id,
        products.name,
        products.description,
        products.price,
        products.stock
      FROM products`;

    const products = data.rows;
    return products;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all products.');
  }
}

export async function fetchProductById(id: number) {
  noStore();
  try {
    console.log (`Checking for product ${id} data`);

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
    //console.log(product[0]);
    return product[0];
  } catch (error) {
    throw new Error('Failed to fetch product data.');
  }
}