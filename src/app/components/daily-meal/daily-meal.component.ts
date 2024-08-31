import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../meal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-meal',
  templateUrl: './daily-meal.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class DailyMealComponent implements OnInit {
  meal: Meal | null = null;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.meal = this.mealService.getDailyMeal();
  }
}
