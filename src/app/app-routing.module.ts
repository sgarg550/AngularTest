import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  { path: '**', redirectTo: 'app', pathMatch: 'full'},
  { path: 'mortgage-calculator', component: MortgageCalculatorComponent}];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule  ]
})

export class AppRoutingModule { }
