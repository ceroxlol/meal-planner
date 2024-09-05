import { Component, EventEmitter, Output } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../meal.model';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
  ],
})
export class AddMealComponent {
  meal: Meal = {
    id: 0,
    title: '',
    ingredients: [],
    timeToCook: 0,
    effortLevel: 1,
    imageUrl: '',
  };

  newIngredient: string = ''; // New ingredient input

  constructor(private mealService: MealService) {}

  addIngredient(event: Event): void {
    const ev = event as KeyboardEvent;
    if (ev.key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter key press

      const trimmedIngredient = this.newIngredient.trim();
      if (trimmedIngredient !== '') {
        this.meal.ingredients.push(trimmedIngredient);
        this.newIngredient = ''; // Reset the input field
      }
    }
  }

  removeIngredient(index: number): void {
    this.meal.ingredients.splice(index, 1);
  }

  setEffortLevel(level: number): void {
    this.meal.effortLevel = level;
  }

  addMeal(): void {
    // Ensure there are no empty ingredients before saving
    this.meal.ingredients = this.meal.ingredients.filter(
      (ingredient) => ingredient.trim() !== ''
    );
    this.mealService.addMeal(this.meal).subscribe(() => {
      this.resetForm();
      this.closeOverlay();
    });
  }

  resetForm(): void {
    this.meal = {
      id: 0,
      title: '',
      ingredients: [],
      timeToCook: 0,
      effortLevel: 1,
      imageUrl: '',
    };
    this.newIngredient = ''; // Reset the input field
  }

  @Output() close = new EventEmitter<void>();

  // Method to close the overlay
  closeOverlay(): void {
    this.close.emit();
  }
}
