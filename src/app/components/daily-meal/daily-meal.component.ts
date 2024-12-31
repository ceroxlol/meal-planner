import { Component, EventEmitter, Output } from '@angular/core';
import { Meal } from '../../meal.model';

import { MatIconModule } from '@angular/material/icon';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-daily-meal',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './daily-meal.component.html',
  styleUrls: ['./daily-meal.component.css'],
})
export class DailyMealComponent {
  dailyMeal: Meal | null = null;

  @Output() dailyMealSelected = new EventEmitter<Meal>();

  constructor(private mealService: MealService) {}

  openDailyMeal(): void {
    if (this.dailyMeal) this.dailyMealSelected.emit(this.dailyMeal);
  }

  ngOnInit(): void {
    this.mealService.getDailyMeal().subscribe((meal) => {
      this.dailyMeal = meal;
    });
  }
}
