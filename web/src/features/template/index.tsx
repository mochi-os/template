import { Main, PageHeader, EmptyState } from '@mochi/common'
import { Rocket } from 'lucide-react'

export function Template() {
  return (
    <>
      <PageHeader
        title="Template App"
        icon={<Rocket className='size-4 md:size-5' />}
      />
      <Main>
        <EmptyState
          icon={Rocket}
          title="Ready to build"
          description="This is a template for building new apps. Start by editing src/features/template/index.tsx"
        />
      </Main>
    </>
  )
}
