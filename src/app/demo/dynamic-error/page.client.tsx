'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const TypeIntro = dynamic(
  () => import('@/components/hero/type-intro').then((mod) => mod.TypeIntro),
  { ssr: false },
);

type Props = Readonly<{ children: ReactNode }>;

export function ClientHomeLayout({ children }: Props) {
  return <div>{children}</div>;
}

export default function ClientDefaultHomeLayout({ children }: Props) {
  return (
    <div>
      {children}
      <TypeIntro />
    </div>
  );
}
