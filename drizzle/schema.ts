import {
  pgTable,
  foreignKey,
  pgEnum,
  serial,
  integer,
  varchar,
  text,
  numeric,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const rating = pgEnum('rating', ['1', '2', '3', '4', '5']);
export const role = pgEnum('role', ['seller', 'user']);

export const products = pgTable('products', {
  id: serial('id').primaryKey().notNull(),
  seller_id: integer('seller_id').references(() => sellers.id),
  name: varchar('name', { length: 256 }).notNull(),
  description: text('description').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  stock: integer('stock').notNull(),
});

export const product_categories = pgTable('product_categories', {
  product_id: integer('product_id').references(() => products.id),
  category_id: integer('category_id').references(() => categories.id),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 256 }).notNull(),
});

export const product_images = pgTable('product_images', {
  id: serial('id').primaryKey().notNull(),
  product_id: integer('product_id').references(() => products.id),
  image_file: varchar('image_file', { length: 256 }).notNull(),
  alt_text: varchar('alt_text', { length: 256 }).notNull(),
});

export const product_keywords = pgTable('product_keywords', {
  product_id: integer('product_id').notNull().references(() => products.id),
  keyword_id: integer('keyword_id').notNull().references(() => keywords.id),
});

export const keywords = pgTable('keywords', {
  id: serial('id').primaryKey().notNull(),
  keyword: varchar('keyword', { length: 256 }).notNull(),
});

export const sellers = pgTable(
  'sellers',
  {
    id: serial('id').primaryKey().notNull(),
    user_id: integer('user_id').references(() => users.id),
    shop_name: varchar('shop_name', { length: 256 }).notNull(),
    shop_story: text('shop_story'),
    shop_logo: varchar('shop_logo', { length: 256 }).notNull(),
    shop_profile: varchar('shop_profile', { length: 256 }),
  },
  (table) => {
    return {
      shop_name_idx: uniqueIndex('shop_name_idx').on(table.shop_name),
    };
  }
);

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey().notNull(),
    f_name: varchar('fName', { length: 40 }).notNull(),
    l_name: varchar('lName', { length: 40 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    password: varchar('password', { length: 256 }).notNull(),
    role: role('role').notNull(),
  },
  (table) => {
    return {
      email_idx: uniqueIndex('email_idx').on(table.email),
    };
  }
);

export const ratings = pgTable('ratings', {
  id: serial('id').primaryKey().notNull(),
  user_id: integer('user_id').references(() => users.id),
  product_id: integer('product_id').references(() => products.id),
  rating: rating('rating').notNull(),
  review: text('review'),
});
