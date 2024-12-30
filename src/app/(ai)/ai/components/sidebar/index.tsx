'use client';

import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { menu_list, sub_menu_list } from '../_data';
import { SiderPlanCard } from '../wrapper';
import { NavList } from './nav-list';
import { NavUser } from './nav-user';
import { TeamSwitcher } from './workspace-switcher';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="min-w-[56px] border-none pl-2 group-data-[collapsible=icon]:pl-1"
      id="yi-sider"
    >
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavList list={menu_list} size="default" />
        <SidebarMenu className="px-4">
          <Separator />
        </SidebarMenu>
        <NavList list={sub_menu_list} size="sm" />
      </SidebarContent>
      <SidebarFooter>
        <SiderPlanCard />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
