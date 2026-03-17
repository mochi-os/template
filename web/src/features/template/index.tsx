import { Header, Main } from '@mochi/web'

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
