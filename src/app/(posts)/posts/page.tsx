import { Navbar } from '@/components/layouts/navbar';
import { PostItem } from '@/components/post/post-item';
import { createMetadata } from '@/lib/seo/metadata';
import { source } from '@/lib/source';

export const metadata = createMetadata({
  alternates: { canonical: '/posts' },
  title: '文章',
});

export default function PostPage() {
  return (
    <div className="flex size-full h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-6">
        <PostsListGroupByYear />
      </main>
    </div>
  );
}

function PostsListGroupByYear(): React.ReactElement {
  // 根据年份分组
  const posts = [...source.getPages()].reduce(
    (acc, post) => {
      const year = new Date(post.data.date!).getFullYear().toString();
      acc[year] ??= [];
      acc[year]?.push(post);
      return acc;
    },
    {} as Record<string, ReturnType<typeof source.getPages>>,
  );

  const years = Object.keys(posts ?? {}).sort((a, b) => Number.parseInt(b) - Number.parseInt(a));

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
        <div className="space-y-10">
          {years.map((year) => (
            <section className="space-y-4" key={year}>
              <div className="text-xl font-extrabold">{year}</div>
              <ul className="flex flex-col gap-6">
                {posts?.[year]?.map((post, idx) => (
                  <li
                    key={post.url}
                    className="animate-fade-up animate-ease-in-out"
                    style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                  >
                    <PostItem
                      href={post.url}
                      title={post.data.title ?? ''}
                      description={post?.data?.description}
                      tags={post?.data?.tags}
                      date={post?.data.date?.toString()}
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
