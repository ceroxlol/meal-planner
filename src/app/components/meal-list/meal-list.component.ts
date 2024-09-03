import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../../meal.model';

import {MatListModule} from '@angular/material/list'; 
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
  imports: [MatListModule, CommonModule, MatCardModule]
})
export class MealListComponent {
  meals: Meal[] = [
    {
      id: 0,
      title: 'Spaghetti Bolognese',
      ingredients: ['Spaghetti' , 'Tomato Sauce', 'Ground Beef' ],
      timeToCook: 45,
      effortLevel: 3,
      imageUrl: 'spaghettiBolognese.webp'
    },
    {
      id: 1,
      title: 'Caesar Salad',
      ingredients: ['Lettuce','Croutons','Caesar Dressing' ],
      timeToCook: 20,
      effortLevel: 1,
      imageUrl: 'caesarSalad.webp'
    }
    // Add more meals as needed
  ];

  @Output() mealSelected = new EventEmitter<Meal>();

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.meals = this.mealService.getMeals();
  }

  selectMeal(meal: Meal): void {
    this.mealSelected.emit(meal);
  }
}
