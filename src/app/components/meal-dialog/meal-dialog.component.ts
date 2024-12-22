import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meal } from '../../meal.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MealService } from '../../services/meal.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-meal-dialog',
  templateUrl: './meal-dialog.component.html',
  styleUrl: './meal-dialog.component.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule
  ],
})
export class MealDialogComponent {
  componentTitle: string = 'Add Meal';
  newIngredient = '';

  constructor(
    public dialogRef: MatDialogRef<MealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { meal: Meal },
    private mealService: MealService
  ) {
    if (this.data.meal.title) {
      this.componentTitle = 'Edit Meal';
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (!this.data.meal.id) {
      this.mealService.addMeal(this.data.meal).subscribe((newMeal: Meal) => {
        this.dialogRef.close(newMeal); // Return the new meal
      });
    } else {
      this.mealService
        .updateMeal(this.data.meal)
        .subscribe((updatedMeal: Meal) => {
          this.dialogRef.close(updatedMeal); // Return the updated meal
        });
    }
  }

  onDelete(): void {
    this.mealService.deleteMeal(this.data.meal.id).subscribe(() => {
      this.dialogRef.close({ delete: true, meal: this.data.meal }); // Return the delete action
    });
  }

  addIngredient(): void {
    if (!this.data.meal.ingredients) {
      this.data.meal.ingredients = [];
    }
    if (this.newIngredient) {
      this.data.meal.ingredients.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  // TODO only remove on save
  removeIngredient(index: number): void {
    this.data.meal.ingredients.splice(index, 1);
  }
}
