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
  submitted = false;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.mortgageForm = this.fb.group({
      'mortgage_amount': new FormControl('', Validators.compose([Validators.required])),
      'interest_rate': new FormControl('', Validators.compose([Validators.required])),
      'amortization_period': new FormControl('', Validators.compose([Validators.required])),
      'payment_frequency': new FormControl('', Validators.compose([Validators.required])),
      'term': new FormControl('', Validators.compose([Validators.required])),
      'prepayment_amount': new FormControl('', Validators.compose([Validators.required])),
      'prepayment_frequency': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]{2,15}$')])),
      'start_with_payment': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]{2,15}$')])),
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.mortgageForm.controls; }

  public onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.mortgageForm.invalid) {
      return;
    }
  }

  }
