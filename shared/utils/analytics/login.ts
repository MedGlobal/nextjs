import * as Sentry from '@sentry/nextjs'
// import { log } from 'next-axiom'

import GtagEvent from '@/utils/gtag/event'
import { LuckyOrangeIdentify } from '@/utils/luckyorange/event'

const TrackLogin = (userId: string, identity: {
  email: string,
  username?: string,
  userType?: string,
  store?: string,
  plan?: string,
  price?: string,
}) => {
  const { email, username } = identity
  // log.info('login', { userId, ...identity })
  LuckyOrangeIdentify(userId, identity)
  GtagEvent('login', { method: 'Email' })
  Sentry.setUser({
    id: userId,
    email,
    username,
  })
}

export default TrackLogin
