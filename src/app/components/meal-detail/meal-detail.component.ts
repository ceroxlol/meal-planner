import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from '../../meal.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MealService } from '../../services/meal.service';
import { MatDialog } from '@angular/material/dialog';
import { EditMealDialogComponent } from '../meal-dialog/meal-dialog.component';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
})
export class MealDetailComponent {
  @Input() meal: Meal | null = null;

  constructor(private mealService: MealService, private dialog: MatDialog) {}

  // Opens the Edit Dialog
  editMeal(): void {
    const dialogRef = this.dialog.open(EditMealDialogComponent, {
      width: '400px',
      data: { meal: { ...this.meal } }, // Pass a copy of the meal object
    });

    dialogRef.afterClosed().subscribe((updatedMeal: Meal) => {
      if (updatedMeal) {
        this.mealService.updateMeal(updatedMeal);
        this.meal = updatedMeal; // Update the local reference
      }
    });
  }

  // Deletes the meal after confirmation
  deleteMeal(): void {
    if (confirm('Are you sure you want to delete this meal?')) {
      const mealId = this.meal?.id;
      if (mealId) {
        this.mealService.deleteMeal(mealId); // Assume meals are unique by title
      }
      this.meal = null; // Clear the current meal
    }
  }
}
