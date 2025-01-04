// @ts-ignore
import { format } from 'date-fns';
import client from '~/tina/__generated__/client';
import Markdown from '@/components/markdown/markdown';
import { TagList } from '@/components/post/tags';
import BackTo from '@/components/toggles/back-to';
import { baseUrl } from '@/lib/metadata';
import { readingTime } from '@/lib/utils';

export const revalidate = 3600; // invalidate every hour

export const dynamicParams = true;

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await client.queries.post({ relativePath: `${slug}.mdx` });

  return (
    <div className="mx-auto max-w-screen-md px-5">
      <BackTo href="/posts">返回文章</BackTo>

      <div className="my-10 space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <time dateTime={data.post.date}>{format(new Date(data.post.date), 'yyyy-MM-dd')}</time>
          &bull;
          <span>阅读时间 {readingTime(JSON.stringify(data.post.body))} 分钟</span>
        </div>

        <h1 className="text-3xl font-semibold">{data.post.title}</h1>
        <div className="text-neutral-500">
          <TagList tags={data.post.tags} />
        </div>
      </div>

      <article className="custom-post-container" id="post">
        <Markdown content={data.post.body} />
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await client.queries.post({ relativePath: `${slug}.mdx` });
  const { title } = data.post;
  const description = "Liaoyi's digital garden";
  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${baseUrl}api/og/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
export async function generateStaticParams() {
  const { data } = await client.queries.postConnection();

  if (!data.postConnection.edges) {
    return [];
  }
  // @ts-ignore
  return data.postConnection.edges.map((post) => ({
    slug: post?.node?._sys.breadcrumbs.join('/'),
  }));
}
