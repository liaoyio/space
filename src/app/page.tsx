import LatestPosts from '@/components/post/latest-posts';
import Summary from '@/components/post/summary';

export const revalidate = 3600; // invalidate every hour

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md px-5">
      <div className="space-y-16">
        <Summary />
        <LatestPosts />
      </div>
    </div>
  );
}
