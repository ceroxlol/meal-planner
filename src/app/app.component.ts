import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DailyMealComponent } from './components/daily-meal/daily-meal.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'; 
import { Meal } from './meal.model';

import { RouterModule } from '@angular/router';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    DailyMealComponent,
    AddMealComponent,
    MealDetailComponent,
    MealListComponent,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meal-planner';
  showAddMeal = false;
  selectedMeal: Meal | null = null;

  toggleAddMeal(): void {
    this.showAddMeal = !this.showAddMeal;
  }

  onMealSelected(meal: Meal): void {
    this.selectedMeal = meal;
  }

  clearSelectedMeal(): void {
    this.selectedMeal = null;
  }
}
