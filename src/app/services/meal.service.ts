import { Injectable } from '@angular/core';
import { Meal } from '../meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private meals: Meal[] = [
    {
      id: 0,
      title: 'Spaghetti Bolognese',
      ingredients: ['Spaghetti' , 'Tomato Sauce', 'Ground Beef' ],
      timeToCook: 45,
      effortLevel: 3,
      imageUrl: 'spaghettiBolognese.webp'
    },
    {
      id: 1,
      title: 'Caesar Salad',
      ingredients: ['Lettuce','Croutons','Caesar Dressing' ],
      timeToCook: 20,
      effortLevel: 1,
      imageUrl: 'caesarSalad.webp'
    },
    {
      id: 0,
      title: 'Spaghetti Bolognese',
      ingredients: ['Spaghetti' , 'Tomato Sauce', 'Ground Beef' ],
      timeToCook: 45,
      effortLevel: 3,
      imageUrl: 'spaghettiBolognese.webp'
    },
    {
      id: 1,
      title: 'Caesar Salad',
      ingredients: ['Lettuce','Croutons','Caesar Dressing' ],
      timeToCook: 20,
      effortLevel: 1,
      imageUrl: 'caesarSalad.webp'
    },
    {
      id: 0,
      title: 'Spaghetti Bolognese',
      ingredients: ['Spaghetti' , 'Tomato Sauce', 'Ground Beef' ],
      timeToCook: 45,
      effortLevel: 3,
      imageUrl: 'spaghettiBolognese.webp'
    },
    {
      id: 1,
      title: 'Caesar Salad',
      ingredients: ['Lettuce','Croutons','Caesar Dressing' ],
      timeToCook: 20,
      effortLevel: 1,
      imageUrl: 'caesarSalad.webp'
    }
    // Add more meals as needed
  ];
  
  private dailyMeal: Meal | null = null;

  constructor() {}

  getMeals(): Meal[] {
    return this.meals;
  }

  addMeal(meal: Meal): void {
    this.meals.push(meal);
  }

  setDailyMeal(meal: Meal): void {
    this.dailyMeal = meal;
  }

  getDailyMeal(): Meal | null {
    return this.dailyMeal;
  }
}
