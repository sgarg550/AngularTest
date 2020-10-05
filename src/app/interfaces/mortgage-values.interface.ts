export interface MortgageValues {
  mortgageAmount: number;
  interestRate: number;
  amortizationPeriod: number;
  paymentFrequency: number;
  term: number;
  prepaymentAmount?: number;
  prepaymentFrequency?: PrepaymentFrequnecy;
  startWithPayment?: number;
}

export enum PrepaymentFrequnecy {
  'OneTime' = 'One time',
  'EachYear' = 'Each year',
  'Regular' = 'same as regular payment'
}
