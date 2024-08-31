import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DailyMealComponent } from './components/daily-meal/daily-meal.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealListComponent } from './components/meal-list/meal-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    DailyMealComponent,
    AddMealComponent,
    MealListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meal-planner';
}
