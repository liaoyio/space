import { ReactNode } from 'react';
import { Title } from '@/app/(ai)/ai/components/wrapper';

export default function AILayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Title title="Account" description="Manage your account settings and preferences" />
      tab
      {children}
    </>
  );
}
