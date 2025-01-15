import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [{ source: '/:path*{/}?', headers: [{ key: 'X-Accel-Buffering', value: 'no' }] }];
  },
};

export default withMDX(config);
