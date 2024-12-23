import type { Metadata } from 'next/types';

export type MetadataProps = Metadata & {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

export function createMetadata({
  title,
  description = "Liaoyi's digital garden",
  canonical = '/',
  ogImage = '/og-image.svg',
  twitter,
  ...props
}: MetadataProps): Metadata {
  return {
    // metadataBase: new URL('https://liaoyi.space'),
    title: {
      template: '%s - Liaoyi',
      default: 'Liaoyi 的数字花园',
    },
    description,
    keywords: ['code snippet', 'blog', 'Next.js', 'React19'],
    alternates: {
      canonical,
    },
    authors: [{ name: 'LiaoYi', url: 'https://github.com/liaoyio' }],
    openGraph: {
      title: title,
      description,
      type: 'website',
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 720, alt: 'OG Image' }],
    },
    twitter: {
      title,
      description,
      creator: '@liaoyi',
      site: 'liaoyi.space',
      images: ogImage,
      card: 'summary_large_image',
      ...twitter,
    },
    ...props
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);
