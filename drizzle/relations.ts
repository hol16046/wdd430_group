import { relations } from "drizzle-orm/relations";
import { sellers, products, product_categories, categories, product_images, product_keywords, keywords, users, ratings } from "./schema";

export const productsRelations = relations(products, ({one, many}) => ({
	seller: one(sellers, {
		fields: [products.seller_id],
		references: [sellers.id]
	}),
	product_categories: many(product_categories),
	product_images: many(product_images),
	product_keywords: many(product_keywords),
	ratings: many(ratings),
}));

export const sellersRelations = relations(sellers, ({one, many}) => ({
	products: many(products),
	user: one(users, {
		fields: [sellers.user_id],
		references: [users.id]
	}),
}));

export const product_categoriesRelations = relations(product_categories, ({one}) => ({
	product: one(products, {
		fields: [product_categories.product_id],
		references: [products.id]
	}),
	category: one(categories, {
		fields: [product_categories.category_id],
		references: [categories.id]
	}),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	product_categories: many(product_categories),
}));

export const product_imagesRelations = relations(product_images, ({one}) => ({
	product: one(products, {
		fields: [product_images.product_id],
		references: [products.id]
	}),
}));

export const product_keywordsRelations = relations(product_keywords, ({one}) => ({
	product: one(products, {
		fields: [product_keywords.product_id],
		references: [products.id]
	}),
	keyword: one(keywords, {
		fields: [product_keywords.keyword_id],
		references: [keywords.id]
	}),
}));

export const keywordsRelations = relations(keywords, ({many}) => ({
	product_keywords: many(product_keywords),
}));

export const usersRelations = relations(users, ({many}) => ({
	sellers: many(sellers),
	ratings: many(ratings),
}));

export const ratingsRelations = relations(ratings, ({one}) => ({
	user: one(users, {
		fields: [ratings.user_id],
		references: [users.id]
	}),
	product: one(products, {
		fields: [ratings.product_id],
		references: [products.id]
	}),
}));