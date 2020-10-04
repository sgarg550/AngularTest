import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
  {path: 'mortgage-calculator', component: MortgageCalculatorComponent}];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule  ]
})

export class AppRoutingModule { }
