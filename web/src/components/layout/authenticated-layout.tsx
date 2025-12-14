import { Outlet } from '@tanstack/react-router'
import { getCookie } from '@mochi/common'
import { cn } from '@mochi/common'
import { LayoutProvider } from '@mochi/common'
import { SearchProvider } from '@mochi/common'
import { SidebarInset, SidebarProvider } from '@mochi/common'
import { TopBar } from '@mochi/common'
import { AppSidebar } from './app-sidebar'

type AuthenticatedLayoutProps = {
  children?: React.ReactNode
}

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const defaultOpen = getCookie('sidebar_state') !== 'false'

  return (
    <SearchProvider>
      <LayoutProvider>
        <div className="flex h-svh flex-col">
          <TopBar title="Template App" />
          <SidebarProvider defaultOpen={defaultOpen} className="flex-1 overflow-hidden">
            <AppSidebar />
            <SidebarInset
              className={cn(
                // Set content container, so we can use container queries
                '@container/content',
                // Allow scrolling in content area
                'overflow-auto'
              )}
            >
              {children ?? <Outlet />}
            </SidebarInset>
          </SidebarProvider>
        </div>
      </LayoutProvider>
    </SearchProvider>
  )
}
