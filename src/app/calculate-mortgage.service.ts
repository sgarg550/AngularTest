import { Injectable } from '@angular/core';
import {MortgageValues} from './interfaces/mortgage-values.interface';
import {CalculationSummary} from './interfaces/calculation-summary.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculateMortgageService {

  constructor() { }

  getMortgageSummary(form: MortgageValues): CalculationSummary {
    console.log(form);
    const monthlyMortgageAmount: number =
    this.getMonthlyMortgageAmount(form.mortgageAmount, form.interestRate, form.amortizationPeriod);
    const summary: CalculationSummary = {
      numberOfPayments: {
        key: 'Number of Payments',
        term: form.term * 12,
        amortizationPeriod: form.amortizationPeriod * 12
      },
      mortgagePayment: {
        key: 'Mortgage Payment',
        term: monthlyMortgageAmount,
        amortizationPeriod: monthlyMortgageAmount
      },
      prepayment: {
        key: 'Prepayment',
        term: form.prepaymentAmount,
        amortizationPeriod: form.prepaymentAmount
      },
      principalPayments: {
        key: 'Principal Payments',
        term: 11492.50,
        amortizationPeriod: 100000
      },
      interestPayments: {
        key: 'Interest Payments',
        term: 23403.80,
        amortizationPeriod: 74481.50
      },
      totalCost: {
        key: 'Total Cost',
        term: 34896.30,
        amortizationPeriod: 174481.50
      }
    };

    return summary;
  }

  getMonthlyMortgageAmount(principal: number, interest: number, months: number): number {
    const interestRate: number = ((interest / 100) / 12);
    const rate: number = Math.pow((1 + interestRate), months * 12 );
    return ((principal * interestRate *  rate) / (rate - 1));
  }
}
