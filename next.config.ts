import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone mode for Docker deployment
  output: 'standalone',
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,
  compress: true,

  // Redirect root to /excisemate
  async redirects() {
    return [
      {
        source: '/',
        destination: '/excisemate',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // Cache static assets
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|html)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // TypeScript and ESLint configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
