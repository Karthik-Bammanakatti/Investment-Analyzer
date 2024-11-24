import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { type SummaryData } from '../types/summary-data';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  @Input({ required: true }) summaryData: SummaryData[] = [];

  tableData = this.summaryData;
}
