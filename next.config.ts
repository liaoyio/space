import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'standalone',
  async headers() {
    return [{ source: '/:path*{/}?', headers: [{ key: 'X-Accel-Buffering', value: 'no' }] }];
  },
  async rewrites() {
    return [{ source: '/admin', destination: '/admin/index.html' }];
  },
};

export default nextConfig;
