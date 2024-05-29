'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { put } from '@vercel/blob';

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

  export async function addProductImage(prevState: ProductImageState, formData: FormData) {
    const validatedFields = AddProductImage.safeParse({
      product_id: formData.get('product_id'),
      imageFile: formData.get('image_file'),
      altText: formData.get('alt_text'),
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

    // const imageFile = formData.get('image') as File;
    // const blob = await put(imageFile.name, imageFile, {
    //   access: 'public',
    // });
    // revalidatePath('/');
    // return blob;

    revalidatePath('/products');
    return { message: 'Product Image Added.' };
  }
    