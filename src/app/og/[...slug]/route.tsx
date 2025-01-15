import { type ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { generateOGImage } from '@/app/og/[...slug]/og';
import { metadataImage } from '@/lib/seo/metadata-image';

const font = readFileSync('./src/app/og/[...slug]/Geist-Regular.ttf');
const fontBold = readFileSync('./src/app/og/[...slug]/Geist-Bold.ttf');

export const GET = metadataImage.createAPI((page): ImageResponse => {
  return generateOGImage({
    primaryTextColor: 'rgba(240,240,240,0.3)',
    primaryColor: 'rgba(65,65,84,0.1)',
    title: page.data.title,
    icon: (
      <img
        width="60"
        height="60"
        src={`https://github.com/liaoyio.png`}
        style={{
          borderRadius: 128,
          border: '1px rgba(255, 255, 255, 0.1)',
        }}
      />
    ),
    description: page.data.description,
    site: (
      <h1
        style={{
          background:
            'linear-gradient( 90deg, #008CFF 0%, #A900FF 46%, #FFB43C 77%, #FFFFFF 100% )',
          fontSize: '40px',
          fontWeight: 700,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Liaoyi&apos;s digital garden🪴
      </h1>
    ),
    fonts: [
      {
        name: 'Geist',
        data: font,
        weight: 400,
      },
      {
        name: 'Geist',
        data: fontBold,
        weight: 600,
      },
    ],
  });
});

export function generateStaticParams(): {
  slug: string[];
}[] {
  return metadataImage.generateParams();
}
