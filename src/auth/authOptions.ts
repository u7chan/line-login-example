import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import LineProvider from 'next-auth/providers/line'

export type UserSession = {
  id: string
  name: string
  email: string | null
}

export const authOptions: AuthOptions = {
  debug: true,
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/',
    verifyRequest: '/',
    newUser: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        if (!credentials?.email || !credentials?.password) return null
        if (
          !(
            credentials.email === 'test@example.com' &&
            credentials.password === 'test'
          )
        ) {
          return null
        }
        return {
          id: 'credential_user',
          name: 'john doe',
          email: 'test@example.com',
        } as UserSession
      },
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID || '',
      clientSecret: process.env.LINE_CLIENT_SECRET || '',
      authorization: {
        params: { scope: 'openid profile email' },
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user = {
          id: token.id,
          name: session.user.name,
          email: session.user.email || null,
        } as UserSession
      }
      return session
    },
  },
}
