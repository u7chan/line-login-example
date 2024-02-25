import { redirect } from 'next/navigation'
import { getUserSession } from '@/auth'
import { SignIn, SignInWithLine } from '@/components'

export default async function Page() {
  if (await getUserSession()) {
    redirect('/')
  }
  return (
    <>
      <h1>Login Example</h1>
      <hr />

      <SignInWithLine />
      <div style={{ marginTop: 32 }} />
      <hr />
      <SignIn />
    </>
  )
}
