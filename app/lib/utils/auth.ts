import type NextAuthOptions from 'next-auth';
import CredentialsProvider from 'next-auth/providers';
import credentials from 'next-auth/providers/credentials';
import { SelectUser } from '../definitions';
import { db } from '@/drizzle/db';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { accounts, havenUsers, sessions, users } from '@/drizzle/schema';


async function getUser(email: string): Promise<SelectUser | undefined> {
  try {
      const user = await db.select()
        .from(users)
        .where(eq(users.email, email));
      
      return user[0];
  } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
  }
}

export const authOptions = {
  adapter: DrizzleAdapter(db, {
    usersTable: havenUsers,
    accountsTable: accounts,
    sessionsTable: sessions,
  }),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: 'jsmith@handcraftedhaven.com' },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(credentials);

        if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch) return user;
          }
          console.log('Invalid credentials');
          return null;
      },
    }),
  ]


} satisfies NextAuthOptions;