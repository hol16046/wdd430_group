/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostename: 'wdd430-group.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
