import { Component, Input } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../meal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class MealDetailComponent {
  @Input() meal: Meal | null = null;

  constructor(private mealService: MealService) {}

  setAsDailyMeal(): void {
    if (this.meal) {
      this.mealService.setDailyMeal(this.meal);
    }
  }
}
