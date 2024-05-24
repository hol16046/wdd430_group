'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Form from '../ui/products/new-form';

const FormSchema = z.object({
  name: z.string({
    invalid_type_error: 'Please enter a valid product name.',
  }),
  price: z.coerce.number().gt(0, {message: 'Price must be greater than $0.'}),
  description: z.string({
    invalid_type_error: 'Please enter a valid product description.',
  }),
  category: z.string({
    invalid_type_error: 'Please enter a valid category.',
  }),
  keyword: z.string({
    invalid_type_error: 'Please enter a valid keyword.',
  }),
  image: z.string(),
  sellerId: z.number(),
});

const CreateNewProduct = FormSchema.omit({ sellerId: true });
const UpdateProduct = FormSchema.omit({ sellerId: true });

export type State = {
  errors?: {
    name?: string[],
    price?: number[],
    description?: string[],
    category?: string[],
    keyword: string[],
    image?: string[],
  },
  message?: string | null,
};

export async function createNewProduct (prevState: State, formData: FormData) {
  const validatedFields = CreateNewProduct.safeParse({
    name: formData.get('name'),
    price: formData.get('price'),
    description: formData.get('description'),
    category: formData.get('category'),
    keyword: formData.get('keyword'),
    image: formData.get('image'),
  });

  console.log(validatedFields);
  if (!validatedFields.success) {
    return { 
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to create new product.',
    };
  }
  const { name, price, description, category, keyword, image } = validatedFields.data;
  const sellerId = 3;

  try {
    await sql`
    INSERT INTO products (name, price, description, category, keyword, seller_id)
    VALUES (${name}, ${price}, ${description}, ${category}, ${keyword}, ${sellerId})
    `;
  } catch (error) {
    return { 
      message: 'Database error. Failed to create new product.',
    };
  }

  revalidatePath('/products');
  redirect('/products');
}