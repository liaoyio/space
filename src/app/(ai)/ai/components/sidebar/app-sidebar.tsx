'use client';

import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { menu_list, sub_menu_list } from '../../components/_data';
import { SiderPlanCard } from '../../components/wrapper';
import { MenuList, SubMenuList } from './nav-list';
import { NavUser } from './nav-user';
import { TeamSwitcher } from './workspace-switcher';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="min-w-[56px] border-none" id="yi-sider">
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <MenuList list={menu_list} />
        <SidebarMenu className="px-4">
          <Separator />
        </SidebarMenu>
        <SubMenuList list={sub_menu_list} />
      </SidebarContent>
      <SidebarFooter>
        <SiderPlanCard />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
