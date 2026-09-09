import { createFileRoute } from '@tanstack/react-router'
import { GeneralError } from '@mochi/web'

export const Route = createFileRoute('/(errors)/503')({
  component: GeneralError,
})
