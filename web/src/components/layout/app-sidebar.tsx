import { useLayout } from '@mochi/common/context/layout-provider'
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
} from '@mochi/common/components/ui/sidebar'
import { NavGroup } from '@mochi/common/components/layout/nav-group'
import { sidebarData } from './data/sidebar-data'

export function AppSidebar() {
  const { collapsible, variant } = useLayout()
  return (
    <Sidebar collapsible={collapsible} variant={variant}>
      <SidebarContent className="pt-6">
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
