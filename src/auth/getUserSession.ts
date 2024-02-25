import { getServerSession } from 'next-auth'
import { authOptions, UserSession } from './authOptions'

export async function getUserSession(): Promise<UserSession | null> {
  const session = await getServerSession(authOptions)
  return session?.user as UserSession | null
}
