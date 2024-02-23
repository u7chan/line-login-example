import { getUserSession } from '@/auth'
import { SignOut } from '@/components'

export default async function Page() {
  const session = await getUserSession()
  return (
    <>
      <h1>Main</h1>
      <hr />
      <div style={{ background: 'lightgray' }}>
        <code>
          <pre>{JSON.stringify(session?.user, null, 2)}</pre>
        </code>
      </div>
      <SignOut />
    </>
  )
}
