import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'

export function Template() {
  return (
    <>
      <Header />
      <Main>
        <div className='mb-6'>
          <h1 className='text-2xl font-bold tracking-tight'>Template</h1>
          <p className='text-muted-foreground'>
            This is a template app for building new apps.
          </p>
        </div>
      </Main>
    </>
  )
}
