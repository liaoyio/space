import type { ComponentProps, FC } from 'react';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { TagList } from '@/components/post/tags';
import BackTo from '@/components/toggles/back-to';
import { Wrapper } from '@/components/ui/wrapper';
import { createMetadata } from '@/lib/seo/metadata';
import { metadataImage } from '@/lib/seo/metadata-image';
import { source } from '@/lib/source';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  const { body: Mdx, toc, lastModified } = await page.data.load();

  return (
    <DocsPage
      toc={toc}
      lastUpdate={lastModified}
      full={page.data.full}
      footer={{ enabled: false }}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      <BackTo href="/posts">返回文章</BackTo>

      {/* <h1 className="text-3xl font-semibold">{page.data.title}</h1> */}
      <div className="flex flex-col gap-2">
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-2 text-base">{page.data.description}</DocsDescription>
        <div className="flex items-center gap-2 text-neutral-500">
          <div className="flex items-center gap-2 text-sm">
            <time dateTime={page.data.date?.toString()}>
              {format(new Date(page.data.date!), 'yyyy-MM-dd')}
            </time>
            &bull;
            {/* <span>阅读时间 {readingTime(JSON.stringify(data.post.body))} 分钟</span> */}
          </div>
          <TagList tags={page.data.tags} />
        </div>
      </div>

      <DocsBody>
        <Mdx
          components={{
            ...defaultMdxComponents,
            Popup,
            PopupContent,
            PopupTrigger,
            Tabs,
            Tab,
            TypeTable,
            // AutoTypeTable,
            Accordion,
            Accordions,
            Wrapper,
            blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const _metadataImage = metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description ?? `Liaoyi's digital garden`,
    openGraph: {
      url: `/posts/${page.slugs.join('/')}`,
    },
  });

  /* const og_url = `/api/og/posts/${page.slugs.join('/')}`;
  const _metadataImage = {
    title: page.data.title,
    description: page.data.description ?? `Liaoyi's digital garden`,
    openGraph: {
      images: {
        alt: 'Banner',
        url: og_url,
        width: 1200,
        height: 630,
      },
      url: `/posts/${page.slugs.join('/')}`,
    },
    twitter: {
      images: {
        alt: 'Banner',
        url: og_url,
        width: 1200,
        height: 630,
      },
    },
  }; */

  return createMetadata(_metadataImage);
}
