// import { log } from 'next-axiom'

import GtagEvent from '@/utils/gtag/event'
import { LuckyOrangeTrack } from '@/utils/luckyorange/event'

type Item = {
  item_id: string,
  item_name: string,
  affiliation?: string,
  coupon?: string,
  currency?: string,
}

type PaymentSourceEvent = {
  currency: string,
  value: number,
  coupon?: string,
  payment_type?: string,
  items: Item[],
}

const AddPaymentSource = (values: PaymentSourceEvent) => {
  // log.info('add_payment_info', values)
  LuckyOrangeTrack('add_payment_info', values)
  GtagEvent('add_payment_info', values)
}

export default AddPaymentSource
