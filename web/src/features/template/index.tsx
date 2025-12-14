import { Header, Main } from '@mochi/common'

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
