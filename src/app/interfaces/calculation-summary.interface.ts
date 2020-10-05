export interface CalculationSummary {
  numberOfPayments: CategoryValue;
  mortgagePayment: CategoryValue;
  prepayment: CategoryValue;
  principalPayments: CategoryValue;
  interestPayments: CategoryValue;
  totalCost: CategoryValue;
  interestSavingWithPrepaymentPlan?: CategoryValue;
}

export interface CategoryValue {
  key: string;
  term: number;
  amortizationPeriod: number;
}
