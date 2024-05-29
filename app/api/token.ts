import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const secretKey = 'your-secret-key'; // Replace with your actual secret key

  const payload = {
    // You can include any data you want to encode in the token here
    // For example, you might include the user's ID and the current time
    userId: req.user.id,
    timestamp: Date.now(),
  };

  // Generate the token
  const token = jwt.sign(payload, secretKey);

  // Send the token to the client
  res.status(200).json({ token });
}