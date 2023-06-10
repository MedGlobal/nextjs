import { pushEvent } from './helpers'

export const optIn = () => {
  pushEvent((LO) => {
    LO.privacy.setConsentStatus(true)
  })
}

export const optOut = () => {
  pushEvent((LO) => {
    LO.privacy.optOut()
  })
}

export const getConsent = (callback: (res: boolean) => void) => {
  pushEvent((LO) => {
    callback(LO.privacy.getConsentStatus())
  })
}

// const getUserLink = (id: string): string => `https://privacy-preview.luckyorange.com/visitor/${id}`

export const openPrivacy = (callback: (res: string) => void) => {
  pushEvent((LO) => {
    callback(LO.privacy.getInfoLink())
  })
}
