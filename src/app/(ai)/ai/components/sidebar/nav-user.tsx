'use client';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

import { AccountIcon, MoreHorizontal, PlansIcon } from '@/app/(ai)/ai/components/icons';

export function NavUser() {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu className='mb-3'>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="flex h-10 rounded-sm group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!pl-2.5 [&>svg]:size-5 [&>svg]:shrink-0"
        >
          <Link href="/plans-billing">
            <PlansIcon />
            <span className="text-sm">Plans & Billing</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <div className="flex justify-between items-center gap-2">
        <SidebarMenuItem className='flex-1'>
          <SidebarMenuButton
            asChild
            className="flex h-9 rounded-sm group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!pl-2.5 [&>svg]:size-5 [&>svg]:shrink-0"
          >
            <Link href="/account/general">
              <AccountIcon />
              <span className="text-sm">Account</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className='group-data-[collapsible=icon]:hidden'>
            <div className='flex h-full p-2 aspect-square  items-center justify-center rounded-md text-sidebar-foreground  transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-5 [&>svg]:shrink-0' >
              <MoreHorizontal />
              <span className="sr-only">More</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-36 rounded-md"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </SidebarMenu>
  );
}