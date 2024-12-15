import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DailyMealComponent } from './components/daily-meal/daily-meal.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Meal } from './meal.model';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MealDialogComponent } from './components/meal-dialog/meal-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    DailyMealComponent,
    MealListComponent,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    CommonModule,
    MatDialogModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedMeal: Meal | null = null;
  constructor(private dialog: MatDialog) {}

  onMealSelected(meal: Meal): void {
    this.selectedMeal = meal;
  }

  addMeal(): void {
    const dialogRef = this.dialog.open(MealDialogComponent, {
      width: '250px',
      data: { meal: {}, title: 'Add Meal' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the result from the dialog here
        console.log('The dialog was closed with result:', result);
      }
    });
  }

  editMeal(meal: Meal): void {
    const dialogRef = this.dialog.open(MealDialogComponent, {
      width: '250px',
      data: { meal, title: 'Edit Meal' },
    });

    dialogRef.afterClosed().subscribe((meal) => {
      if (meal) {
      }
    });
  }

  upsertMeal(meal: Meal): void {
    /*
    if (meal.id) {
      this.updateMeal(meal);
    } else {
      this.addMeal(meal);
    }
      */
  }

  clearSelectedMeal(): void {
    this.selectedMeal = null;
  }
}
