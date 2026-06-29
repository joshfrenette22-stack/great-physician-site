import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  async headers() {
    return [
      {
        source: '/schedule/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'payment=*, clipboard-read=*, clipboard-write=*',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://secure.gethealthie.com https://calendly.com https://www.youtube.com;",
          },
        ],
      },
      {
        source: '/why-great-physician',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.youtube.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
