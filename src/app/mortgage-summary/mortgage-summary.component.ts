import {Component, Input, OnInit} from '@angular/core';
import {CalculationSummary} from '../interfaces/calculation-summary.interface';

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.css']
})
export class MortgageSummaryComponent implements OnInit {
  @Input() summary: CalculationSummary;

  constructor() { }

  ngOnInit(): void {
  }

}
