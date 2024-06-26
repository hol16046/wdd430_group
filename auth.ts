import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { SelectUser } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

type User = {
  id: string; // Ensure 'id' is a string
  f_name: string;
  l_name: string;
  email: string;
  password: string;
  role: 'seller' | 'user';
};

async function getUser(email: string) {
    try {
      const user = await sql<SelectUser>`SELECT * FROM users WHERE email=${email}`;
      return {
        ...user.rows[0],
        id:user.rows[0].id.toString(),
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.password);
 
            if (passwordsMatch) {
              return user;
            }
            // console.log('Valid Credentials');
            // return null;
          }
   
          console.log('Invalid credentials');
          return null;
      },
  }),
],
callbacks: {
  jwt({ token, user }) {
    if (user && user.id) {
      token.id = user.id.toString(); // Convert user.id to string
    }
    return token
  },
  session({ session, token }) {
    if (token && token.id) {
      session.user.id = token.id.toString(); // Convert token.id to string
    }
    return session
  },
}
});