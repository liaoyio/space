'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs as MyTabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Tabs() {
  const pathname = usePathname();
  const val = pathname.split('/')[3];
  // console.log('pathname', pathname, pathname.split('/'), val);
  return (
    <MyTabs value={val} defaultValue="general" className="w-full bg-transparent">
      <div className="flex items-center justify-between pb-3">
        <TabsList className="inline-flex h-9 w-full items-center justify-start rounded-none border-b !bg-transparent p-0 text-muted-foreground">
          <Link href="/ai/account/general" title="General">
            <TabsTrigger
              value="general"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent pb-3 pt-2 font-normal text-muted-foreground shadow-none ring-offset-background transition-all transition-none duration-200 hover:border-gray-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:border-b-green-500 data-[state=active]:!bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none dark:hover:border-gray-700"
            >
              General
            </TabsTrigger>
          </Link>
          <Link href="/ai/account/team-details" title="Team Details">
            <TabsTrigger
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent pb-3 pt-2 font-normal text-muted-foreground shadow-none ring-offset-background transition-all transition-none duration-200 hover:border-gray-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:border-b-green-500 data-[state=active]:!bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none dark:hover:border-gray-700"
              value="team-details"
            >
              Team Details
            </TabsTrigger>
          </Link>
        </TabsList>
      </div>
    </MyTabs>
  );
}
