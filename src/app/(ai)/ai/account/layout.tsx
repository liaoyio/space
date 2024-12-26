import { ReactNode } from 'react';
import { Title } from '@/app/(ai)/ai/components/wrapper';
import { Tabs } from './layout.client';

export default async function AILayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
      <Title title="Account" description="Manage your account settings and preferences" />
      <Tabs />
      {children}
    </div>
  );
}
