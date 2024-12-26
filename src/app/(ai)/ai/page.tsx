import TopBanner from './components/sidebar/banner';
import { Title, Getstarted, PinnedTools, PopularTools } from './components/wrapper';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './components/sidebar/app-sidebar';
import { startedList, popularTools } from './components/_data';

export default function Page() {
  return (
    <SidebarProvider className='h-full overflow-hidden'>
      <AppSidebar />
      <SidebarInset className="p-4 min-h-0 bg-sidebar">
        <div className="lg:shadow-xs overflow-hidden flex h-full flex-col bg-white dark:border-gray-700 dark:bg-gray-900 lg:rounded-2xl lg:border lg:border-gray-200 lg:dark:shadow-xl">
          <TopBanner />
          <div className='flex-1 space-y-6 overflow-y-auto p-4 sm:p-6'>
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
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
