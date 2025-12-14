import { Header } from '@mochi/common'
import { Main } from '@mochi/common/components/layout/main'

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
