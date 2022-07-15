import { GA_TRACKING_IDS, GA_TRACKING_GROUP } from "@/constants/analytics";
import { exists } from './helpers';

// TODO: Check recommended props here: https://support.google.com/analytics/answer/9267735?visit_id=637892006529986923-2352346741&rd=1

const GtagEvent = (
  action: string,
  eventParams: { [key: string]: any },
) => {
  if (!exists) return;
  window.gtag("event", action, {
    ...eventParams,
    send_to: GA_TRACKING_GROUP,
  });
};

export default GtagEvent;