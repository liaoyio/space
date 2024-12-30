import React, { ReactNode } from 'react';

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="lg:shadow-xs flex h-full flex-col overflow-hidden bg-white dark:border-gray-700 dark:bg-gray-900 lg:rounded-2xl lg:border lg:border-gray-200 lg:dark:shadow-xl">
      {children}
    </div>
  );
}
