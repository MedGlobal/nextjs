export const GA_IDS: string[] = [
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_VM || '',
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_MGG || '',
]

export const GA_TRACKING_GROUP: string = 'ga_tracking';
export const GA_TRACKING_IDS: string[] = GA_IDS.filter(str => Boolean(str));
