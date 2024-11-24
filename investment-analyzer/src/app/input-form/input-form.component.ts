import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type FormData } from '../types/form-data';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  enteredInitialAmount!: number;
  enteredYearlyAmount!: number;
  enteredYearlyInterestRate!: number;
  enteredNumberOfYears!: number;

  audio = new Audio('assets/money.mp3');

  @Output() formSubmit = new EventEmitter<FormData>();

  onSubmit() {
    this.audio.play();
    this.formSubmit.emit({
      initialAmount: this.enteredInitialAmount,
      yearlyAmount: this.enteredYearlyAmount,
      yearlyInterestRate: this.enteredYearlyInterestRate,
      numberOfYears: this.enteredNumberOfYears,
    });
  }
}
