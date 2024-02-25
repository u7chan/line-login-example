'use client'
import { signIn } from 'next-auth/react'

export function SignIn() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      callbackUrl: '/',
      redirect: true,
    })
  }
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <h3>Email / Password でログインを行います。</h3>
        <form
          style={{
            marginTop: 12,
            display: 'grid',
            gridAutoColumns: 200,
            gridAutoRows: 38,
            gridRowGap: 12,
          }}
          onSubmit={handleSubmit}
        >
          <input type='email' name='email' placeholder='email' required />
          <input
            type='password'
            name='password'
            placeholder='password'
            required
          />
          <input type='submit' value='Log in' />
        </form>
      </div>
    </div>
  )
}
