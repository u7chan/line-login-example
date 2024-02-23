import { redirect } from 'next/navigation'
import { getUserSession } from '@/auth'
import { SignIn } from '@/components'

export default async function Page() {
  if (await getUserSession()) {
    redirect('/')
  }
  return (
    <>
      <h1>Login</h1>
      <hr />
      <SignIn />
    </>
  )
}
