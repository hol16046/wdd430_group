import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';
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
} from '../../drizzle/schema';

export type SelectProduct = typeof products.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;
export type SelectProductImage = typeof product_images.$inferSelect;
export type InsertProductImage = typeof product_images.$inferInsert;
export type SelectSeller = typeof sellers.$inferSelect;
export type InsertSeller = typeof sellers.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type SelectRating = typeof ratings.$inferSelect;
export type InsertRating = typeof ratings.$inferInsert;
export type SelectCategory = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;
export type SelectProductCategory = typeof product_categories.$inferSelect;
export type InsertProductCategory = typeof product_categories.$inferInsert;
export type SelectKeyword = typeof keywords.$inferSelect;
export type InsertKeyword = typeof keywords.$inferInsert;
export type SelectProductKeyword = typeof product_keywords.$inferSelect;
export type InsertProductKeyword = typeof product_keywords.$inferInsert;

export type ProductForm = {
  id: number;
  seller_id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export type ProductsWithCategories = {
  product: SelectProduct;
  product_category: SelectProductCategory;
}