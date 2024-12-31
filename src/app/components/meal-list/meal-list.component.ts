import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Meal } from '../../meal.model';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
  imports: [MatListModule, CommonModule, MatCardModule],
})
export class MealListComponent implements OnChanges {
  meals: Meal[] = [];
  filteredMeals: Meal[] = [];

  @Input() refreshTrigger = false;
  @Input() searchTerm: string = '';
  @Output() mealSelected = new EventEmitter<Meal>();

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.getMeals();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refreshTrigger']) {
      this.getMeals();
    }
    if (changes['searchTerm']) {
      this.filterMeals();
    }
  }

  getMeals(): void {
    this.mealService.getMeals().subscribe((meals) => {
      this.meals = meals;
    });
  }

  filterMeals(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredMeals = this.meals.filter(meal =>
      meal.title.toLowerCase().includes(term) ||
      meal.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
    );
  }

  selectMeal(meal: Meal): void {
    this.mealSelected.emit(meal);
  }
}
