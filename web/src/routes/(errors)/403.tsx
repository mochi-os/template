import { createFileRoute } from '@tanstack/react-router'
import { AccessDeniedError } from '@mochi/web'

export const Route = createFileRoute('/(errors)/403')({
  component: AccessDeniedError,
})
