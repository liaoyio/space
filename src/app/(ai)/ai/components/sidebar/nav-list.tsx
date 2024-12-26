'use client';

import Link from 'next/link';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

type Props = {
  list: {
    title: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  }[];
};

export function MenuList({ list }: Props) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {list.map((item) => (
          <SidebarMenuItem key={item.title} className="mb-1">
            <SidebarMenuButton
              asChild
              className="flex h-10 rounded-sm group-data-[collapsible=icon]:!size-10 [&>svg]:size-6 [&>svg]:shrink-0"
            >
              <Link href={`/${item.title.toLocaleLowerCase()}`}>
                <item.icon />
                <span className="text-base">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export function SubMenuList({ list }: Props) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {list.map((item) => (
          <SidebarMenuItem key={item.title} className="mb-1">
            <SidebarMenuButton
              asChild
              className="flex h-10 rounded-sm group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!pl-2.5 [&>svg]:size-5 [&>svg]:shrink-0"
            >
              <Link href={`/${item.title.toLocaleLowerCase()}`}>
                <item.icon />
                <span className="text-sm">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
