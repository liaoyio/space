import { HeroSection } from '@/components/hero/hero-section';

export const revalidate = 3600; // invalidate every hour

export default function Home() {
  return (
    <>
      {/* <div className="mx-auto max-w-screen-md px-5">
        <div className="space-y-16">
          <Summary />
          <LatestPosts />
        </div>
      </div> */}
      <div className="relative grid h-full place-content-center">
        <HeroSection />
      </div>
    </>
  );
}
