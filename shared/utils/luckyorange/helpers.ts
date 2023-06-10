import { LO_ID } from '@/data/constants/analytics'

// TODO: Check recommended props here: https://support.google.com/analytics/answer/9267735?visit_id=637892006529986923-2352346741&rd=1

type EventCallback = (LOrange: LuckyOrange) => void

export const exists = (): boolean => (
  Boolean(window)
  && Boolean(LO_ID)
  && Boolean(typeof window !== 'undefined')
  && Boolean(Object.prototype.hasOwnProperty.call(window, 'LOQ'))
)

export const pushEvent = (
  callback: EventCallback,
) => {
  if (!exists()) return
  // @ts-ignore 2339
  window.LOQ.push(['ready', async (LOrange: LuckyOrange) => {
    await LOrange.$internal.ready('visitor')
    if (LOrange) callback(LOrange)
  }])
}

export default pushEvent
