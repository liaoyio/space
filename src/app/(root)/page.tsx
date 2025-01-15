import { HeroSection } from '@/components/hero/hero-section';

export const revalidate = 3600; // invalidate every hour

export default function Home() {
  return (
    <div className="relative grid h-full place-content-center">
      <HeroSection />
    </div>
  );
}
