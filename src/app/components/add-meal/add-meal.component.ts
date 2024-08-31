import { Component } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../meal.model';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatChipListbox,
    FormsModule,
    CommonModule,
    MatChip
  ]
})
export class AddMealComponent {
  meal: Meal = {
    title: '',
    ingredients: [],
    cookTime: 0,
    effortLevel: 1
  };
  ingredient = '';

  constructor(private mealService: MealService) {}

  addIngredient(): void {
    if (this.ingredient) {
      this.meal.ingredients.push(this.ingredient);
      this.ingredient = '';
    }
  }

  addMeal(): void {
    this.mealService.addMeal(this.meal);
    this.resetForm();
  }

  resetForm(): void {
    this.meal = {
      title: '',
      ingredients: [],
      cookTime: 0,
      effortLevel: 1
    };
  }
}
