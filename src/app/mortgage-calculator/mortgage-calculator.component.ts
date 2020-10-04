import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {CalculateMortgageService} from '../calculate-mortgage.service';
@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  public mortgageForm: FormGroup;
  submitted = false;
  show = false;

  constructor(private fb: FormBuilder,
              private calculateMortgageService: CalculateMortgageService,
              private router: Router) {
    this.mortgageForm = this.fb.group({
      mortgage_amount: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{2,15}$')])],
      interest_rate: ['', Validators.compose([Validators.required])],
      amortization_period_yr: ['', Validators.compose([Validators.required])],
      amortization_period_mon: ['', Validators.compose([Validators.required])],
      payment_frequency:  ['', Validators.compose([Validators.required])],
      term: ['', Validators.compose([Validators.required])],
      prepayment_amount: ['', Validators.compose([Validators.required])],
      prepayment_frequency: ['', Validators.compose([Validators.required])],
      start_with_payment: ['', Validators.compose([Validators.required])],
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
      const data = this.mortgageForm.getRawValue();
      this.calculateMortgageService.Calculate(data).subscribe((res) => {
          if (res.data) {
            this.show = true;
          }
        },
        err => {
          this.errormsg = err.msg;
        }
      );
    }
  }

  }
