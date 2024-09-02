import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DailyMealComponent } from './components/daily-meal/daily-meal.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'; 
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    DailyMealComponent,
    AddMealComponent,
    MealListComponent,
    MatGridListModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meal-planner';
  selectedMeal!: Meal | null;
}
