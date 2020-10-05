import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import {FormBuilder} from '@angular/forms';
import {CalculateMortgageService} from '../calculate-mortgage.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../app-routing.module';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;
  let formBuilder;
  let calculateMortgageService;
  let router;

  beforeEach(async () => {
    formBuilder = FormBuilder;
    calculateMortgageService = CalculateMortgageService;
    await TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorComponent ],
      providers: [
        {provide: FormBuilder, useStub: {}},
        {provide: CalculateMortgageService, useStub: {}},
        {provide: Router, useStub: {}},
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
