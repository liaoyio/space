import React, { ReactNode } from 'react';

export default function AILayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="min-h-0 lg:h-full lg:w-full lg:py-3 lg:pr-3">
      <div className="relative h-full">{children}</div>
    </main>
  );
}
