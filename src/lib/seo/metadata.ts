import type { Metadata } from 'next/types';

export type MetadataProps = Metadata & {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

export function createMetadata(override?: Metadata): Metadata {
  return {
    ...override,
    title: {
      template: '%s - Liaoyi',
      default: 'Liaoyi 的数字花园',
    },
    description: override?.description ?? `Liaoyi 的数字花园`,
    authors: [{ name: 'LiaoYi', url: 'https://github.com/liaoyio' }],
    metadataBase: baseUrl,
    // alternates: { canonical: '', },
    openGraph: {
      title: override?.title ?? undefined,
      description: override?.description ?? `Liaoyi's digital garden`,
      url: 'https://liaoyi.space',
      images: '/og-image.svg',
      siteName: 'Fumadocs',
      ...override?.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@liaoyi',
      site: 'liaoyi.space',
      title: override?.title ?? undefined,
      description: override?.description ?? `Liaoyi's digital garden`,
      images: '/og-image.svg',
      ...override?.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);
