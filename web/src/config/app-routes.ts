export const APP_ROUTES = {
  // Chat app
  CHAT: {
    BASE: '/chat/',
    HOME: '/chat/',
  },
  // Friends app
  FRIENDS: {
    BASE: '/friends/',
    HOME: '/friends/',
  },
  // Home app
  HOME: {
    BASE: '/',
    HOME: '/',
  },
  // Feeds app
  FEEDS: {
    BASE: '/feeds/',
    HOME: '/feeds/',
  },
  // Forums app
  FORUMS: {
    BASE: '/forums/',
    HOME: '/forums/',
  },
  // Notifications app
  NOTIFICATIONS: {
    BASE: '/notifications/',
    HOME: '/notifications/',
  },
  // Settings app
  SETTINGS: {
    BASE: '/settings/',
    HOME: '/settings/',
  },
  // TEMPLATE app
  TEMPLATE: {
    BASE: './',
    HOME: './',
  },
} as const

export type AppRoutes = typeof APP_ROUTES
