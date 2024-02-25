import { getUserSession } from '@/auth'
import { SignOut } from '@/components'

export default async function Page() {
  const userSession = await getUserSession()
  return (
    <>
      <h1>Main</h1>
      <hr />
      <div style={{ background: 'lightgray' }}>
        <code>
          <pre>{JSON.stringify(userSession, null, 2)}</pre>
        </code>
      </div>
      <SignOut />
    </>
  )
}
