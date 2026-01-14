import { PageHeader, Main } from '@mochi/common'
import { Sparkles } from 'lucide-react'

export function Template() {
  return (
    <>
      <PageHeader 
        title="Template" 
        icon={<Sparkles className='size-4 md:size-5' />}
      />
      <Main />
    </>
  )
}
