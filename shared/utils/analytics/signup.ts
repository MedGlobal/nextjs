// import { log } from 'next-axiom'

import GtagEvent from '@/utils/gtag/event'
import { LuckyOrangeTrack } from '@/utils/luckyorange/event'

const TrackSignUp = (identity: {
  email: string,
  firstName: string,
  lastName: string,
  country?: string,
  terms: boolean,
}) => {
  // log.info('sign_up', identity)
  LuckyOrangeTrack('sign_up', identity)
  GtagEvent('sign_up', { method: 'Email' })
}

export default TrackSignUp
