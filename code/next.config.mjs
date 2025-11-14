/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Added unoptimized option
  },
  // Compression and caching
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  // Internationalization support
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ]
  },
  // Sitemap generation
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: 'https://www.sitemaps.org/sitemap.xml',
        permanent: false,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // Added eslint ignoreDuringBuilds option
  },
  typescript: {
    ignoreBuildErrors: true, // Added typescript ignoreBuildErrors option
  },
};

export default nextConfig;
