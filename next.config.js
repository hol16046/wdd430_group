/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'obn4bxfmc3wjm5to.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
