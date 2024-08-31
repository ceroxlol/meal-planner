import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../meal.model';

import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  standalone: true,
  imports: [MatListModule,CommonModule]
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.meals = this.mealService.getMeals();
  }

  selectMeal(meal: Meal): void {
    // Logic to display meal details
  }
}
