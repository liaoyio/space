import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} sidebar={{ enabled: false }} nav={{ enabled: false }}>
      {/* <Navbar /> */}
      {children}
    </DocsLayout>
  );
}
