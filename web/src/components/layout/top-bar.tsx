import { useEffect, useState } from 'react'
import { CircleUser, LogOut, Settings } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { readProfileCookie } from '@/lib/profile-cookie'
import useDialogState from '@/hooks/use-dialog-state'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { removeCookie } from '@/lib/cookies'

export function TopBar() {
  const [offset, setOffset] = useState(0)
  const [open, setOpen] = useDialogState()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const profile = readProfileCookie()
  const displayName = profile.name || 'User'
  const displayEmail = profile.email || 'user@example.com'

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  const handleSignOut = async () => {
    setIsLoggingOut(true)
    try {
      removeCookie('token')
      removeCookie('mochi_me')
      toast.success('Logged out successfully')
      window.location.href = import.meta.env.VITE_AUTH_LOGIN_URL
    } catch {
      removeCookie('token')
      removeCookie('mochi_me')
      toast.error('Logged out (with errors)')
      window.location.href = import.meta.env.VITE_AUTH_LOGIN_URL
    } finally {
      setIsLoggingOut(false)
      setOpen(false)
    }
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 h-16 w-full shadow-sm',
          offset > 10 && 'shadow'
        )}
      >
        <div
          className={cn(
            'relative flex h-full items-center gap-4 px-4 sm:px-6',
            offset > 10 &&
              'after:bg-background/80 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-lg'
          )}
        >
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="./images/logo-header.svg"
              alt="Mochi"
              className="h-8 w-8"
            />
          </a>

          {/* Title */}
          <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-light tracking-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>Template</h1>

          <div className="flex-1" />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <CircleUser className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-56" align="end">
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="grid px-2 py-1.5 text-start text-sm leading-tight">
                  <span className="font-semibold">{displayName}</span>
                  <span className="text-xs text-muted-foreground">
                    {displayEmail}
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  window.location.href = '/settings/'
                }}
              >
                <Settings className="size-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(true)}>
                <LogOut className="size-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <AlertDialog open={!!open} onOpenChange={setOpen}>
        <AlertDialogContent className="sm:max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Log out</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to log out? You will need to log in again to access your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoggingOut}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSignOut} disabled={isLoggingOut}>
              {isLoggingOut ? 'Logging out...' : 'Log out'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
