import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SummaryComponent } from './summary/summary.component';
import { type FormData } from './types/form-data';
import { type SummaryData } from './types/summary-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InputFormComponent, SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'investment-analyzer';
  formData!: FormData;

  summaryData: SummaryData[] = [];

  onFormSubmit(formData: FormData) {
    this.formData = formData;
    this.summaryData = [];

    for (let i = 0; i < formData.numberOfYears; i++) {
      if (i == 0) {
        let yearNumber = i + 1;
        let investedCapital = formData.initialAmount;
        let yearInterest =
          investedCapital * (formData.yearlyInterestRate / 100);
        let totalInterest = yearInterest;
        let investmentValue = investedCapital + totalInterest;

        this.summaryData.push({
          yearNumber: yearNumber,
          investedCapital: investedCapital,
          yearInterest: yearInterest,
          totalInterest: totalInterest,
          investmentValue: investmentValue,
        });
      } else {
        let yearNumber = i + 1;
        let investedCapital =
          formData.initialAmount + i * formData.yearlyAmount;
        let yearInterest =
          (this.summaryData[i - 1].investmentValue + formData.yearlyAmount) *
          (formData.yearlyInterestRate / 100);
        let totalInterest =
          this.summaryData[i - 1].totalInterest + yearInterest;
        let investmentValue = investedCapital + totalInterest;

        this.summaryData.push({
          yearNumber: yearNumber,
          investedCapital: investedCapital,
          yearInterest: yearInterest,
          totalInterest: totalInterest,
          investmentValue: investmentValue,
        });
      }
    }
  }
}
