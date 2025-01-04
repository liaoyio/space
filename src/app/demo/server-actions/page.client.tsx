'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { createToDoDirectly } from './page.actions';

export function DirectlyButton({ children }: { children: ReactNode }) {
  return (
    <Button
      variant="outline"
      onClick={async () => {
        const data = await createToDoDirectly('运动');
        alert(JSON.stringify(data));
      }}
    >
      {children}
    </Button>
  );
}
