import { createFileRoute } from '@tanstack/react-router'
import { AuthenticatedLayout, useAuthStore } from '@mochi/common'
import { sidebarData } from '@/components/layout/data/sidebar-data'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async () => {
    const store = useAuthStore.getState()
    if (!store.isInitialized) {
      await store.initialize()
    }
  },
  component: () => <AuthenticatedLayout sidebarData={sidebarData} />,
})
