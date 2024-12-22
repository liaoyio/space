import type { Metadata } from 'next';
// @ts-ignore
import client from '~/tina/__generated__/client';
// @ts-ignore
import type { PostConnectionQuery } from '~/tina/__generated__/types';
import { PostItem } from '@/components/post/post-item';

export const revalidate = 3600; // invalidate every hour

export const metadata: Metadata = {
  title: '文章',
};

export default async function Posts() {
  const { data } = await client.queries.postConnection({
    last: -1,
    sort: 'date',
    filter: { draft: { eq: false } },
  });

  const posts = data.postConnection.edges?.reduce(
    (acc, post) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      const year = new Date(post?.node?.date!).getFullYear().toString();

      acc[year] ??= [];
      acc[year]?.push(post);

      return acc;
    },
    {} as Record<string, PostConnectionQuery['postConnection']['edges']>,
  );

  const years = Object.keys(posts ?? {}).sort((a, b) => parseInt(b) - parseInt(a));

  if (!years.length || posts?.length) {
    return (
      <div className="grid place-content-center gap-8">
        <h3 className="text-center text-2xl font-semibold tracking-tight">暂无文章</h3>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-md px-5">
      <div className="space-y-10">
        <div className="font-semibold">文章列表</div>

        <div className="space-y-4">
          {years.map((year) => (
            <section className="space-y-4" key={year}>
              <div className="font-semibold">{year}</div>
              <ul className="flex flex-col gap-6">
                {posts?.[year]?.map((post, idx) => (
                  <li
                    key={post?.node?.id}
                    className="animate-fade-up animate-ease-in-out"
                    style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                  >
                    <PostItem
                      href={`/posts/${post?.node?._sys.breadcrumbs.join('/')}`}
                      title={post?.node?.title ?? ''}
                      // @ts-ignore
                      description={post?.node?.description}
                      tags={post?.node?.tags}
                      date={post?.node?.date}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
