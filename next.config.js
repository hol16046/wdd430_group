/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  
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
