import Link from 'next/link';
import ArrowCard from '@/components/post/arrow-card';
import { source } from '@/lib/source';

export default function Page(): React.ReactElement {
  // 根据年份分组
  const posts = [...source.getPages()].reduce(
    (acc, post) => {
      const year = new Date(post.data.date!).getFullYear().toString();
      acc[year] ??= [];
      acc[year]?.push(post);
      return acc;
    },
    {} as Record<string, any[]>,
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
        <div className="font-semibold">文章</div>

        <div className="space-y-4">
          {years.map((year) => (
            <section className="space-y-4" key={year}>
              <div className="font-semibold">{year}</div>
              <ul className="flex flex-col gap-4">
                {posts?.[year]?.map((post) => (
                  <li key={post.url}>
                    <Link href={post.url}>
                      <ArrowCard title={post.data.title} />
                    </Link>
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
