import { Component, EventEmitter, Output } from '@angular/core';

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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatButtonModule} from '@angular/material/button';

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
    SearchBarComponent,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  refreshMealList = false;
  searchTerm: string = '';

  constructor(private dialog: MatDialog) {}

  openMealDialog(meal: Meal = {} as Meal): void {
    const dialogRef = this.dialog.open(MealDialogComponent, {
      width: '400px',
      data: { meal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.refreshMealList = !this.refreshMealList;
      }
    });
  }

  onSearch(term: string): void {
    this.searchTerm = term;
  }
}
