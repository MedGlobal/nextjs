export const GA_IDS: string[] = [
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_OLD || '',
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_NEW || '',
]

export const GA_TRACKING_GROUP = 'ga_tracking'
export const GA_TRACKING_IDS: string[] = GA_IDS.filter((str) => Boolean(str))

export const LO_ID = process.env.NEXT_PUBLIC_LUCKYORANGE_ID || ''

export const FBP_ID = process.env.NEXT_PUBLIC_FACEBOOKPIXEL_ID || ''
