import { LayoutDashboard, Settings, FileText, Users } from 'lucide-react'
import { type SidebarData } from '@mochi/common'

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Documents',
          url: '/documents',
          icon: FileText,
        },
        {
          title: 'Users',
          url: '/users',
          icon: Users,
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
        },
      ],
    },
  ],
}
