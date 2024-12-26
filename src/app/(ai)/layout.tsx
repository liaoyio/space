import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function AILayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // MARK: 这个 overflow-hidden 作用是让在容器内滚动
    <main className={cn('font-sans antialiased overflow-hidden', 'bg-sidebar')}>
      {children}
    </main>
  );
}
