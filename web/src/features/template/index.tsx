import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'

export function Template() {
  return (
    <>
      <Header>
        <span className='text-muted-foreground'>
          This is a template for building new apps
        </span>
      </Header>
      <Main />
    </>
  )
}
