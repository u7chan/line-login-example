'use client'
import { signIn } from 'next-auth/react'

export function SignIn() {
  const handleClick = () => {
    signIn('line', { callbackUrl: '/', redirect: true })
  }
  return <button onClick={handleClick}>Sign in with LINE</button>
}
