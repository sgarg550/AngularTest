import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {CalculateMortgageService} from '../calculate-mortgage.service';
import {CalculationSummary} from '../interfaces/calculation-summary.interface';
import {MortgageValues} from '../interfaces/mortgage-values.interface';
@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  public mortgageForm: FormGroup;
  submitted = false;
  show = false;
  summary: CalculationSummary;

  constructor(private fb: FormBuilder,
              private calculateMortgageService: CalculateMortgageService,
              private router: Router) {
    this.mortgageForm = this.fb.group({
      mortgage_amount: [100000, Validators.compose([Validators.required, Validators.pattern('^[0-9]{2,15}$')])],
      interest_rate: [5, Validators.compose([Validators.required])],
      amortization_period_yr: [25, Validators.compose([Validators.required])],
      amortization_period_mon: [0, Validators.compose([Validators.required])],
      payment_frequency:  ['Y', Validators.compose([Validators.required])],
      term: [5, Validators.compose([Validators.required])],
      prepayment_amount: [null],
      prepayment_frequency: [null],
      start_with_payment: [null],
    });
  }

  ngOnInit(): void {
  }

  get f(): any { return this.mortgageForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.mortgageForm.invalid) {
      return;
    } else{
        const formValue = this.mortgageForm.value;
        const values: MortgageValues = {
          mortgageAmount:  formValue.mortgage_amount,
          interestRate: formValue.interest_rate,
          amortizationPeriod: formValue.amortization_period_yr,
          paymentFrequency: formValue.payment_frequency,
          term: formValue.term,
          prepaymentAmount: formValue.prepayment_amount || 0,
          startWithPayment: formValue.start_with_payment || 1
        };
        this.summary = this.calculateMortgageService.getMortgageSummary(values);
      }
      // const data = this.mortgageForm.getRawValue();
      // this.calculateMortgageService.Calculate(data).map((res) => {
      //     console.log(res);
      //     console.log(res.val_1);
      //     if (res.val_1) {
      //       this.show = true;
      //     }
      //   }
      // );
    }
 }
