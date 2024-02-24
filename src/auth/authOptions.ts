import type { AuthOptions } from 'next-auth'
import LineProvider from 'next-auth/providers/line'

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
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID || '',
      clientSecret: process.env.LINE_CLIENT_SECRET || '',
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
          ...session.user,
        } as never
      }
      return session
    },
  },
}
