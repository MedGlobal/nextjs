declare type StripeCardBrands =
  | "VISA"
  | "AMEX"
  | "DINERS"
  | "DISCOVER"
  | "JCB"
  | "MAESTRO"
  | "MASTERCARD"
  | "UNIONPAY"
  | "VISA"
  | "UNKNOWN"


interface StripeCardInformation {
  id: string,
  name: string,
  brand: StripeCardBrands,

  last4: string,
  funding: string,

  addressCity: string,
  addressState: string,
  addressCountry: string,
  addressZip: string,

  expYear: string,
  expMonth: string,
}