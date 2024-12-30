import * as React from 'react';
import { Wrapper } from '@/components/ui/wrapper';

export const Footer = () => {
  return (
    <footer className="p-6">
      <Wrapper className="flex flex-col items-center justify-center space-y-1 text-sm text-muted-foreground md:flex-row md:space-x-4 md:space-y-0">
        <div className="order-3">
          &copy; {new Date().getFullYear()} Liaoyi&nbsp;&nbsp;·&nbsp;&nbsp; 吾志所向，一往无前。
        </div>
      </Wrapper>
    </footer>
  );
};
