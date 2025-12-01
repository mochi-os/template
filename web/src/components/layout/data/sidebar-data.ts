import { APP_ROUTES } from '@/config/routes'
import {
  MessagesSquare,
  AudioWaveform,
  Bell,
  Command,
  GalleryVerticalEnd,
  Home,
  UserPlus,
  LayoutTemplate,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Template User',
    email: 'you@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Workspace',
      logo: Command,
      plan: 'Starter',
    },
    {
      name: 'Team One',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Team Two',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'Apps',
      items: [
        {
          title: 'Home',
          url: APP_ROUTES.HOME.HOME,
          icon: Home,
          external: true,
        },
        {
          title: 'Chat',
          url: APP_ROUTES.CHAT.HOME,
          icon: MessagesSquare,
          external: true,
        },
        {
          title: 'Friends',
          url: APP_ROUTES.FRIENDS.HOME,
          icon: UserPlus,
          external: true,
        },
        {
          title: 'Notifications',
          url: APP_ROUTES.NOTIFICATIONS.HOME,
          icon: Bell,
          external: true,
        },
        {
          title: 'Template',
          url: APP_ROUTES.TEMPLATE.HOME,
          icon: LayoutTemplate,
        },
      ],
    },
  ],
}
