import { Injectable } from '@angular/core';
import { Meal } from '../meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private meals: Meal[] = [];
  private dailyMeal: Meal | null = null;

  constructor() {}

  getMeals(): Meal[] {
    return this.meals;
  }

  addMeal(meal: Meal): void {
    this.meals.push(meal);
  }

  setDailyMeal(meal: Meal): void {
    this.dailyMeal = meal;
  }

  getDailyMeal(): Meal | null {
    return this.dailyMeal;
  }
}
