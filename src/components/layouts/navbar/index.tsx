'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useScroll, useThrottle } from 'ahooks';
import { Github } from 'lucide-react';
import { NextLink } from '@/components/toggles/next-link';
import { ModeToggle } from '@/components/toggles/theme-mode';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MobileNav } from './mobile-nav';

export const navItems: Array<{ label?: string; link: string; external?: boolean }> = [
  { label: '文章', link: '/posts' },
  { label: '关于', link: '/about' },
];

export const Navbar = () => {
  const scroll = useScroll(() => document);
  const pathname = usePathname();
  const [previousScrollTop, setPreviousScrollTop] = React.useState(0);
  const throttledPreviousScrollTop = useThrottle(previousScrollTop, {
    wait: 500,
  });

  const [isHideHeader, setIsHideHeader] = React.useState(false);
  const throttledIsHideHeader = useThrottle(isHideHeader, { wait: 500 });

  React.useEffect(() => {
    const _top = scroll?.top ?? 0;

    if (_top - throttledPreviousScrollTop < 0) {
      // 向上滚动时，显示导航栏
      setIsHideHeader(false);
    } else {
      setIsHideHeader(true);
    }

    if (_top) {
      setPreviousScrollTop(_top);
    }
  }, [scroll?.top]);

  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex w-full justify-center border-x-0 backdrop-blur transition-all',
        throttledPreviousScrollTop > 60 && 'bg-background/50 border-border/50 border-b',
        {
          '-translate-y-20': throttledPreviousScrollTop > 300 ? throttledIsHideHeader : false,
        },
      )}
    >
      <div className="flex h-16 w-full items-center p-4 sm:p-8 md:max-w-screen-md 2xl:max-w-screen-xl">
        <NextLink href="/" className={cn('mr-4 hidden sm:flex')} aria-label="Liaoyi">
          {/* <Logo /> */}
          <span className="text-primary ml-2 text-base font-semibold">Liaoyi</span>
        </NextLink>
        <div className="mr-8 hidden h-16 flex-1 items-center justify-end text-base font-medium sm:flex">

          {/* active={} */}
          {navItems.map((el) => (
            <Link
              href={el.link}
              key={el.link}
              className={cn(
                'text-muted-foreground px-4 py-2 text-sm font-normal transition-colors',
                'hover:text-primary hover:font-semibold',
                /* link active */
                /^\/posts(?:\/.*)?$/.test(pathname) && 'text-primary font-semibold',
              )}
            >
              {el.label}
            </Link>
          ))}
        </div>
        <MobileNav />
        <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
          <ModeToggle />
          <Link
            href="https://github.com/liaoyio"
            target="_blank"
            title="Liaoyi's Github"
            aria-label="https://github.com/liaoyio"
          >
            <Button variant="outline" size={'icon'} aria-label="Github Icon">
              <Github className="text-base" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
