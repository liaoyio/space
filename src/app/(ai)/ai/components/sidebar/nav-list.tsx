'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva, VariantProps } from 'class-variance-authority';
import { MenuItem } from '@/app/(ai)/ai/components/_data';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const SidebarMenuButtonVariants = cva(
  'flex h-10 rounded-sm group-data-[collapsible=icon]:!size-10 [&>svg]:shrink-0',
  {
    variants: {
      size: {
        default: '[&>svg]:size-6',
        sm: 'group-data-[collapsible=icon]:!pl-2.5 [&>svg]:size-5',
      },
    },
    defaultVariants: { size: 'default' },
  },
);

type Props = {
  size?: VariantProps<typeof SidebarMenuButtonVariants>['size'];
  list: MenuItem[];
};

export function NavList({ list, size }: Props) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {list.map((item) => (
          <SidebarMenuItem key={item.title} className="mb-1">
            <SidebarMenuButton
              asChild
              className={SidebarMenuButtonVariants({ size })}
              isActive={pathname === item.href}
            >
              <Link href={item.href}>
                <item.icon />
                <span className={size === 'default' || !size ? 'text-base' : 'text-sm'}>
                  {item.title}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
