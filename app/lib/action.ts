'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { db} from '@/drizzle/db';
import * as schema from '@/drizzle/schema';
import { eq } from "drizzle-orm";



export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

  // Logic for Adding a New Product Image
  const ProductImageFormSchema = z.object({
    id: z.number(),
    product_id: z.number({
      invalid_type_error: 'Please select a product.',
    }),
    image_file: z.string({
      invalid_type_error: 'Please upload an image.',
    }),
    alt_text: z.string({
      invalid_type_error: 'Please enter an image description',
    }),
  });

  const AddProductImage = ProductImageFormSchema.omit({ id: true });

  export type ProductImageState = {
    errors?: {
      product_id?: number[];
      image_file?: string[];
      alt_text?: string[];
    };
    message?: string | null;
  };

  export async function addProductImage(productId: number, imageFile: string, altText: string) {
    const validatedFields = AddProductImage.safeParse({
      product_id: productId,
      image_file: imageFile,
      alt_text: altText,
    });

    console.log(validatedFields);
    if(!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Add Product Image.',
      };
    }
    const { product_id, image_file, alt_text } = validatedFields.data;

    try {
      await sql`
        INSERT INTO product_images (product_id, image_file, alt_text)
        VALUES (${product_id}, ${image_file}, ${alt_text})
      `;
    } catch (error) {
      console.error('Database Error:', error);
      return { message: 'Failed to Add Product Image.' };
    }

    revalidatePath('/products');
    return { message: 'Product Image Added.' };
  }
    

  // Logic for Adding a New Product
  const ProductFormSchema = z.object({
    id: z.coerce.number(),
    seller_id: z.coerce.number(),
    name: z.string({
      invalid_type_error: 'Please enter a product name.',
    }),
    description: z.string({
      invalid_type_error: 'Please enter a product description',
    }),
    price: z.coerce.number().gt(0, {
      message: 'Please enter a valid price.',
    }),
    stock: z.coerce.number({
      invalid_type_error: 'Please enter a positive number for stock.',
    }),
  });

  const AddProduct = ProductFormSchema.omit({ id: true, seller_id: true });

  export type ProductState = {
    errors?: {
      seller_id?: string[];
      name?: string[];
      description?: string[];
      price?: string[];
      stock?: string[];
    };
    key?: string;
    message?: string;
  };

  export async function addProduct(sellerId: number, prevState: ProductState, formData: FormData) {
    const validatedFields = AddProduct.safeParse({
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      stock: formData.get('stock'),
    });

    if(!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Add Product.',
      };
    }
    const { name, description, price, stock } = validatedFields.data;

    try {
      await sql`
        INSERT INTO products (seller_id, name, description, price, stock)
        VALUES (${sellerId}, ${name}, ${description}, ${price}, ${stock})
      `;
    } catch (error) {
      console.error('Database Error:', error);
      return { message: 'Failed to Add Product.' };
    }

    revalidatePath('/products');
    return { key: 'success', message: `${name} added successfully!`};
  }
    

  // Logic for editing a product
  const EditProduct = ProductFormSchema.omit({ id: true, seller_id: true });

  export type EditProductState = {
    errors?: {
      id?: string[];
      name?: string[];
      description?: string[];
      price?: string[];
      stock?: string[];
    };
    key?: string;
    message?: string;
  };

  export async function editProduct( productId: number, prevState: EditProductState, formData: FormData) {
    const validatedFields = EditProduct.safeParse({
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      stock: formData.get('stock'),
    });

    if(!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Add Product.',
      };
    }
    const { name, description, price, stock } = validatedFields.data;

    try {
      await sql`
        UPDATE products 
        SET (name, description, price, stock) = (${name}, ${description}, ${price}, ${stock})
        WHERE id = ${productId}
      `;
    } catch (error) {
      console.error('Database Error:', error);
      return { message: 'Failed to Update Product.' };
    }

    revalidatePath('/products');
    return { key: 'success', message: `${name} updated successfully!`};
  }


  // Logic for deleting a product
  export async function deleteProduct( id: number ) {
    let products = schema.products;
    let redirectMessage = null;
    try {
      await db.delete(products).where(eq(products.id, id));
      redirectMessage = 'Product%20Deleted';
    } catch (error) {
      console.error('Database Error:', error);
      return { message: 'Failed to Delete Product.' };
    } finally {
      if (redirectMessage) {
        redirect(`/products/?message=${redirectMessage}`);
      }
    }

    
  }