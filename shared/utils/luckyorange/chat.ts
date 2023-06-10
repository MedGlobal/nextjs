import { pushEvent } from './helpers'

export const openChat = () => {
  pushEvent((LO) => {
    LO.messenger.open()
  })
}

export const closeChat = () => {
  pushEvent((LO) => {
    LO.messenger.close()
  })
}
