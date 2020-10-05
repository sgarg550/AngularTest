import { TestBed } from '@angular/core/testing';

import { CalculateMortgageService } from './calculate-mortgage.service';

describe('CalculateMortgageService', () => {
  let service: CalculateMortgageService;
  const mortgageTerms = [
    {principal: 100000, interest: 5, period: 25, expectedResult: 584.5900415079801},
    {principal: 250000, interest: 2, period: 25, expectedResult: 1059.635846610165},
    {principal: 350000, interest: 3, period: 25, expectedResult: 1659.7395985018793},
    {principal: 450000, interest: 3.3, period: 25, expectedResult: 2204.827049635344},
    {principal: 150000, interest: 4, period: 25, expectedResult: 791.7552604466553},
    {principal: 233000, interest: 5, period: 25, expectedResult: 1362.0947967135937},
    {principal: 120000, interest: 6, period: 25, expectedResult: 773.1616817826173}
    ];


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateMortgageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return monthly mortgage payment', () => {
    mortgageTerms.forEach((obj) => {
      expect(service.getMonthlyMortgageAmount(obj.principal, obj.interest, obj.period)).toBe(obj.expectedResult);
    });
  });

});
