import { Component, Input } from '@angular/core';
import { Meal } from '../../meal.model';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-daily-meal',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './daily-meal.component.html',
  styleUrls: ['./daily-meal.component.css'],
})
export class DailyMealComponent {
  @Input() dailyMeal: Meal | null = null;

  constructor() {}

  openMeal() {
    throw new Error('Method not implemented.');
  }
}
