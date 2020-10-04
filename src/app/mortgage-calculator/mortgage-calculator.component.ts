import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  public mortgageForm: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router) {
    this.mortgageForm = this.fb.group({
      'mortgage_amount': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'interest_rate': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'amortization_period': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'payment_frequency': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'term': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'prepayment_amount': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'prepayment_frequency': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]{2,15}$')])),
      'start_with_payment': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]{2,15}$')])),
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(values: Object): void {
    if (this.mortgageForm.valid) {
    } else {
      this.validateAllFormFields(this.mortgageForm);
    }
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  }
