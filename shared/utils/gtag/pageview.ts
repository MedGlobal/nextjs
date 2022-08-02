import { GA_TRACKING_IDS, GA_TRACKING_GROUP } from "@/data/constants/analytics";
import { exists } from './helpers';

// TODO: Check recommended props here: https://support.google.com/analytics/answer/9267735?visit_id=637892006529986923-2352346741&rd=1
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const GtagPageView = (url: string) => {
  if (!exists()) {
    console.error('Tracking not enabled. Google might have been blocked.');
    return;
  }
  const opts = {
    groups: GA_TRACKING_GROUP,
    page_path: url,
  };

  GA_TRACKING_IDS.forEach((id: string) => {
    window.gtag("config", id, opts);
  })
};

export default GtagPageView
