'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export const navItems: Array<{ label?: string; link: string; external?: boolean }> = [
  { label: '文章', link: '/posts' },
  { label: '关于', link: '/about' },
];

export const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={'outline'} size={'icon'} aria-label="菜单" className={cn('sm:hidden')}>
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Liaoyi</SheetTitle>
          <SheetDescription>努力做一个更好的程序员</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 pt-8">
          {navItems.map((el) => (
            <Link
              key={el.link}
              href={el.link}
              className={cn(
                buttonVariants({
                  variant: /^\/posts(?:\/.*)?$/.test(pathname) ? 'default' : 'ghost',
                }),
                'text-md flex w-full items-center !justify-start gap-2 px-4 py-2',
              )}
              onClick={() => {
                setOpen(false);
              }}
            >
              {el.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
