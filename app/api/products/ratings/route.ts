import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// Exporting a named function for the POST method
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { description, rating, productId } = body;

  try {
    const result = await sql`
      INSERT INTO ratings (review, rating, product_id)
      VALUES (${description}, ${rating}, ${productId})
      RETURNING id`;

    return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
  } catch (error) {
    console.error('Failed to insert rating:', error);
    return NextResponse.json({ error: 'Failed to insert rating' }, { status: 500 });
  }
}
