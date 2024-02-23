import { getServerSession } from 'next-auth'
import { authOptions } from './authOptions'

type Session = {
  user: {
    name: string
    image: string
  }
}

export async function getUserSession(): Promise<Session | null> {
  const session: Session | null = await getServerSession(authOptions)
  return session
}
