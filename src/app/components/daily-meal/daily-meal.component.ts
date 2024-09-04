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
  meal: Meal | null = null;

  @Output() dailyMealSelected = new EventEmitter<Meal>();

  constructor(private mealService: MealService) {}

  openDailyMeal(): void {
    if (this.meal) this.dailyMealSelected.emit(this.meal);
  }

  ngOnInit(): void {
    // Automatically set a random daily meal if none is set
    this.mealService.setRandomDailyMealIfNone();
    this.meal = this.mealService.getDailyMeal();
  }
}
