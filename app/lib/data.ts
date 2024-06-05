"use server"
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore} from 'next/cache';
import { db } from '../../drizzle/db';
import { eq } from 'drizzle-orm';
import { products, product_categories, categories, product_images } from '@/drizzle/schema';
import { SelectProduct, SelectProductImage, SelectRating, SelectSeller, SelectUser, SelectProductKeyword, SelectKeyword, SelectCategory, SelectProductCategory } from '../lib/definitions';



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

export async function fetchAllProductImages() {
  noStore();
  try {
    const data = await sql<SelectProductImage>`
      SELECT
        product_images.id,
        product_images.product_id,
        product_images.image_file,
        product_images.alt_text
      FROM product_images`;

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
    console.log (`Fetching seller user_${id} data`);

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
  // noStore();
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

export async function fetchAllSellers() {
  // noStore();
  try {
    const seller_data = await sql<SelectSeller>`
      SELECT
        sellers.id,
        sellers.user_id,
        sellers.shop_name,
        sellers.shop_story,
        sellers.shop_logo,
        sellers.shop_profile
        FROM sellers`;
      
    const sellers = seller_data.rows;
    return sellers;
  } catch (error) {
    throw new Error('Failed to fetch all seller data.');
  }
}

export async function fetchUserData(id: number) {
  noStore();
  try {
    // console.log (`Fetching User ${id} data`);

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

export async function fetchProductKeyword(id: number) {
  noStore();
  try {
    // console.log (`Fetching product ${id} keyword_id data `);

    const keyword_data = await sql<SelectProductKeyword>`
      SELECT
      product_keywords.keyword_id
      FROM product_keywords
      WHERE product_keywords.product_id = ${id}`;
      
    const product_keyword = keyword_data.rows;
    return product_keyword;
  } catch (error) {
    throw new Error('Failed to fetch keyword_id data.');
  }
}

export async function fetchKeyword(id: number) {
  noStore();
  try {
    // console.log (`Fetching keyword ${id}`);

    const data = await sql<SelectKeyword>`
      SELECT
        keyword
      FROM keywords
      WHERE id = ${id}`;

    const keyword = data.rows;

    return keyword;
  } catch (error) {
    throw new Error('Failed to fetch keyword.');
  }
}


// Data functions for Sorting/Filtering Products
export async function fetchAllCategories() {
  noStore();
  try {
    const data = await sql<SelectCategory>`
      SELECT
        categories.id,
        categories.name
      FROM categories`;

    const categories = data.rows;
    return categories;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all categories.');
  }
}

export async function fetchProductsWithCategories() {
  noStore();
  try {
    const result = await db.select({
      product: products,
      product_category: product_categories
    })
    .from(products)
    .leftJoin(product_categories, eq(product_categories.product_id, products.id));

    const productCategories = result;
    return productCategories;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all products with categories.');
  }
}

export async function fetchProductsWithCategoryId(category_id: number) {
  noStore();
  try {
    const result = await db.select({
      product: products,
      category: categories,
      product_category: product_categories
    })
    .from(product_categories)
    .leftJoin(products, eq(product_categories.product_id, products.id))
    .leftJoin(categories, eq(product_categories.category_id, categories.id))
    .where(eq(product_categories.category_id, category_id));

    const productCategories = result;
    return productCategories;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch products for this category.');
  }
}