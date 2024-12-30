import React, { ReactNode } from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { AppSidebar } from './ai/components/sidebar';

export default function AILayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // MARK: 这个 overflow-hidden 作用是让在容器内滚动
    <main className={cn('overflow-hidden font-sans antialiased', 'dark:bg-gray-950')}>
      <SidebarProvider className="h-full overflow-hidden">
        <AppSidebar />
        <SidebarInset className="min-h-0 p-4 dark:bg-gray-950">{children}</SidebarInset>
      </SidebarProvider>
    </main>
  );
}
