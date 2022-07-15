import { GA_TRACKING_IDS, GA_TRACKING_GROUP } from "@/constants/analytics";

export const exists = (): boolean => {
  return Boolean(window.gtag) && Boolean(GA_TRACKING_IDS.length)
}
