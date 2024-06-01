import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { description, rating, productId } = req.body;

    try {
      const result = await sql`
        INSERT INTO ratings (review, rating, product_id)
        VALUES (${description}, ${rating}, ${productId})
        RETURNING id`;

      res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
      console.error('Failed to insert rating:', error);
      res.status(500).json({ error: 'Failed to insert rating' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
