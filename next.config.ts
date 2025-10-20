import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [20, 50, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
};

export default nextConfig;
