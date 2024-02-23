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
}
