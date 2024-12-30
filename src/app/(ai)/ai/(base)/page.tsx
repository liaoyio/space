import { Separator } from '@/components/ui/separator';
import { startedList, popularTools } from '../components/_data';
import TopBanner from '../components/sidebar/banner';
import { Title, Getstarted, PinnedTools, PopularTools } from '../components/wrapper';

export default function Page() {
  return (
    <>
      <TopBanner />
      <div className="flex-1 space-y-6 overflow-y-auto p-4 sm:p-6">
        <Title
          title="Home"
          description="Access powerful AI tools to convert, explain, and generate code in one place."
        />
        <Getstarted list={startedList} />
        <Separator />
        <PinnedTools />
        <Separator />
        <PopularTools list={popularTools} />
      </div>
    </>
  );
}
