import 'dotenv/config';
import { db } from '@vercel/postgres';
import {
  users,
  sellers,
  products,
  product_images,
  ratings,
  categories,
  product_categories,
  keywords,
  product_keywords,
} from '../app/lib/placeholder-data.js';
// const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';

async function seedUsers(client) {
  try {
    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (f_name, l_name, email, password, role)
        VALUES (${user.f_name}, ${user.l_name}, ${user.email}, ${hashedPassword}, ${user.role})
        ON CONFLICT (email) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedSellers(client) {
  try {
    // Insert data into the "sellers" table
    const insertedSellers = await Promise.all(
      sellers.map(
        (seller) => client.sql`
        INSERT INTO sellers (user_id, shop_name, shop_story, shop_logo, shop_profile)
        VALUES (${seller.user_id}, ${seller.shop_name}, ${seller.shop_story}, ${seller.shop_logo}, ${seller.shop_profile})
        ON CONFLICT (shop_name) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedSellers.length} sellers`);

    return {
      sellers: insertedSellers,
    };
  } catch (error) {
    console.error('Error seeding sellers:', error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (seller_id, name, description, price, stock)
        VALUES (${product.sellerId}, ${product.productName}, ${product.productDesc}, ${product.price}, ${product.stock})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedProductImages(client) {
  try {
    // Insert data into the "product_images" table
    const insertedProductImages = await Promise.all(
      product_images.map(
        (product_image) => client.sql`
        INSERT INTO product_images (product_id, image_file, alt_text)
        VALUES (${product_image.productId}, ${product_image.imageFile}, ${product_image.altText});
      `
      )
    );

    console.log(`Seeded ${insertedProductImages.length} product images`);

    return {
      product_images: insertedProductImages,
    };
  } catch (error) {
    console.error('Error seeding product images:', error);
    throw error;
  }
}

async function seedRatings(client) {
  try {
    // Insert data into the "ratings" table
    const insertedRatings = await Promise.all(
      ratings.map(
        (rating) => client.sql`
        INSERT INTO ratings (user_id, product_id, rating, review)
        VALUES (${rating.userId}, ${rating.productId}, ${rating.rating}, ${rating.review});
      `
      )
    );

    console.log(`Seeded ${insertedRatings.length} ratings`);

    return {
      ratings: insertedRatings,
    };
  } catch (error) {
    console.error('Error seeding ratings:', error);
    throw error;
  }
}

async function seedCategories(client) {
  try {
    // Insert data into the "categories" table
    const insertedCategories = await Promise.all(
      categories.map(
        (category) => client.sql`
        INSERT INTO categories (name)
        VALUES (${category.categoryName})
      `
      )
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      categories: insertedCategories,
    };
  } catch (error) {
    console.error('Error seeding categories:', error);
    throw error;
  }
}

async function seedProductCategories(client) {
  try {
    // Insert data into the "product_categories" table
    const insertedProductCategories = await Promise.all(
      product_categories.map(
        (product_category) => client.sql`
        INSERT INTO product_categories (product_id, category_id)
        VALUES (${product_category.productId}, ${product_category.categoryId});
      `
      )
    );

    console.log(
      `Seeded ${insertedProductCategories.length} product_categories`
    );

    return {
      product_categories: insertedProductCategories,
    };
  } catch (error) {
    console.error('Error seeding product categories:', error);
    throw error;
  }
}

async function seedKeywords(client) {
  try {
    // Insert data into the "keywords" table
    const insertedKeywords = await Promise.all(
      keywords.map(
        (keyword) => client.sql`
        INSERT INTO keywords (keyword)
        VALUES (${keyword.keyword})
      `
      )
    );

    console.log(`Seeded ${insertedKeywords.length} keywords`);

    return {
      keywords: insertedKeywords,
    };
  } catch (error) {
    console.error('Error seeding keywords:', error);
    throw error;
  }
}

async function seedProductKeywords(client) {
  try {
    // Insert data into the "product_keywords" table
    const insertedProductKeywords = await Promise.all(
      product_keywords.map(
        (product_keyword) => client.sql`
        INSERT INTO product_keywords (product_id, keyword_id)
        VALUES (${product_keyword.productId}, ${product_keyword.keywordId});
      `
      )
    );

    console.log(`Seeded ${insertedProductKeywords.length} product keywords`);

    return {
      product_keywords: insertedProductKeywords,
    };
  } catch (error) {
    console.error('Error seeding product keywords:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  console.log('Connected to the database');
  await seedUsers(client);
  await seedSellers(client);
  await seedProducts(client);
  await seedProductImages(client);
  await seedRatings(client);
  await seedCategories(client);
  await seedProductCategories(client);
  await seedKeywords(client);
  await seedProductKeywords(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
