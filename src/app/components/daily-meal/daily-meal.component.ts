import { Component, EventEmitter, Output } from '@angular/core';
import { Meal } from '../../meal.model';

import { MatIconModule } from '@angular/material/icon';
import { MealService } from '../../services/meal.service';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-daily-meal',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatTooltipModule, CommonModule, MatButtonModule],
  templateUrl: './daily-meal.component.html',
  styleUrls: ['./daily-meal.component.css'],
})
export class DailyMealComponent {
  dailyMeal: Meal | null = null;

  @Output() dailyMealSelected = new EventEmitter<Meal>();

  constructor(private mealService: MealService) {}

  openDailyMeal(): void {
    if (this.dailyMeal) this.dailyMealSelected.emit(this.dailyMeal);
  }

  ngOnInit(): void {
    this.mealService.getDailyMeal().subscribe((meal) => {
      this.dailyMeal = meal;
    });
  }

  resetDailyMeal(event: Event): void {
    event.stopPropagation();
    this.mealService.resetDailyMeal().subscribe((meal) => {
      this.dailyMeal = meal;
    });
  }

  handleImageError(event: any): void {
    event.target.src = 'mealNotFound.png';
  }
}
