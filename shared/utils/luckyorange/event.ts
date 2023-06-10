import { pushEvent } from './helpers'

export const LuckyOrangeIdentify = (id: string, identity: {
  email: string,
  userType?: string,
  store?: string,
  plan?: string,
  price?: string,
}) => {
  pushEvent((LO) => {
    LO.visitor.identify(id, identity)
  })
}

export const LuckyOrangeTrack = (id: string, values?: { [key: string]: unknown }) => {
  pushEvent((LO) => {
    LO.events.track(id, values)
  })
}
