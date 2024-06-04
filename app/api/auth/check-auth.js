import { getSession } from 'next-auth/react';

export default async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    // If the user is authenticated, return the session
    res.status(200).json({ authenticated: true, session });
  } else {
    // If the user is not authenticated, return an error
    res.status(200).json({ authenticated: false });
  }
};