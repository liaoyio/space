import React, { ReactNode } from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { AppSidebar } from './ai/components/sidebar/app-sidebar';

export default function AILayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // MARK: 这个 overflow-hidden 作用是让在容器内滚动
    <main className={cn('overflow-hidden font-sans antialiased', 'dark:bg-gray-950')}>
      <SidebarProvider className="h-full overflow-hidden">
        <AppSidebar />
        <SidebarInset className="min-h-0 p-4 dark:bg-gray-950">
          <div className="lg:shadow-xs flex h-full flex-col overflow-hidden bg-white dark:border-gray-700 dark:bg-gray-900 lg:rounded-2xl lg:border lg:border-gray-200 lg:dark:shadow-xl">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
