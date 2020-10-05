import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';

import { AppRoutingModule } from './app-routing.module';
import { MortgageSummaryComponent } from './mortgage-summary/mortgage-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MortgageCalculatorComponent,
    HeaderComponent,
    FooterComponent,
    MortgageSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
