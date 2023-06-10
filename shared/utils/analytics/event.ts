// import { log } from 'next-axiom'

import GtagEvent from '@/utils/gtag/event'
import { LuckyOrangeTrack } from '@/utils/luckyorange/event'

const TrackEvent = (
  event: Gtag.EventNames | string,
  values?: Gtag.CustomParams | Gtag.ControlParams | Gtag.EventParams | Gtag.ConfigParams,
) => {
  // log.info(event, values)
  LuckyOrangeTrack(event, values)
  GtagEvent(event, values)
}

export default TrackEvent
