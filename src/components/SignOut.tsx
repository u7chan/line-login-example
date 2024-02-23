'use client'
import { signOut } from 'next-auth/react'

export function SignOut() {
  const handleClick = () => {
    signOut()
  }
  return <button onClick={handleClick}>SignOut</button>
}
