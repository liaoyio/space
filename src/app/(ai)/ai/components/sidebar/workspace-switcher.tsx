'use client';

import Link from 'next/link';
import { ChevronsUpDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { LineLogo, LogoDark, LogoLight, SuccessIcon } from '../icons';

export function TeamSwitcher() {
  const { isMobile } = useSidebar();
  return (
    <>
      <SidebarMenu>
        <div className="flex items-center justify-between">
          <SidebarMenuButton
            size="lg"
            className="flex items-center hover:bg-transparent group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!pl-0.5"
          >
            <Link href="/" className="flex items-center">
              <LogoDark className="mb-2 hidden w-full dark:block [[data-state=collapsed]_&]:hidden" />
              <LogoLight className="mb-2 w-full dark:hidden [[data-state=collapsed]_&]:hidden" />
              <div className="flex items-center justify-center px-1">
                <LineLogo className="hidden size-8 w-full [[data-state=collapsed]_&]:block" />
              </div>
            </Link>
          </SidebarMenuButton>
          <SidebarTrigger className="flex items-center justify-center [[data-state=collapsed]_&]:hidden" />
        </div>
      </SidebarMenu>

      <SidebarMenu className="hidden size-10 group-data-[collapsible=icon]:block">
        <SidebarTrigger className="flex size-10 items-center justify-center [&>svg]:!size-6 [&>svg]:rotate-180 [&>svg]:opacity-90" />
      </SidebarMenu>

      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="flex items-center group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!pl-1 group-data-[collapsible=icon]:hover:bg-transparent"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-green-500">
                  P
                </div>
                <div className="grid flex-1 space-y-0.5 text-left text-sm leading-tight">
                  <span className="truncate text-xs text-neutral-500 dark:text-neutral-400 sm:gap-2.5">
                    You Workspace
                  </span>
                  <span className="flex-1 truncate text-xs underline underline-offset-2">
                    Personal
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? 'bottom' : 'right'}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">Teams</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  /*  */
                }}
                className="flex items-center justify-between"
              >
                <div className="inline-flex size-7 items-center justify-center rounded-sm bg-green-500 uppercase">
                  P
                </div>
                <span className="flex-1 underline underline-offset-2">Personal</span>
                <SuccessIcon className="size-4 text-green-500" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
