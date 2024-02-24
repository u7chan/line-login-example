'use client'
import { signIn } from 'next-auth/react'
import { LineButton } from './line-button'

export function SignIn() {
  const handleClick = () => {
    signIn('line', { callbackUrl: '/', redirect: true })
  }
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <LineButton onClick={handleClick} />
    </div>
  )
}
