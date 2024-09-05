import { Component, EventEmitter, Output } from '@angular/core';
import { Meal } from '../../meal.model';

import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
  imports: [MatListModule, CommonModule, MatCardModule],
})
export class MealListComponent {
  meals: Meal[] = [];

  @Output() mealSelected = new EventEmitter<Meal>();

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getMeals().subscribe((meals) => {
      this.meals = meals;
    });
  }

  selectMeal(meal: Meal): void {
    this.mealSelected.emit(meal);
  }
}
