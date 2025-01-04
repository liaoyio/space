import React, { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-md py-10">
      <div className="flex items-center gap-6 pb-6">
        <Link href="/demo/server-actions/tradition" className="underline">
          Client
        </Link>
        <Link href="/demo/server-actions" className="underline">
          Server Actions
        </Link>
        <Link href="/demo/server-actions/use-form" className="underline">
          UseFrom Hooks + Server Actions
        </Link>
        <Link href="/demo/server-actions/use-optimistic" className="underline">
          useOptimistic
        </Link>
      </div>
      {children}
    </div>
  );
}
