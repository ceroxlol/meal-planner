import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../../meal.model';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-daily-meal',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './daily-meal.component.html',
  styleUrls: ['./daily-meal.component.css']
})
export class DailyMealComponent {
  @Input() dailyMeal: Meal | null = null;

  constructor(private router: Router) {}

  navigateToMealDetail(): void {
    if (this.dailyMeal) {
      this.router.navigate(['/meal-detail', this.dailyMeal.id]);
    }
  }
}
