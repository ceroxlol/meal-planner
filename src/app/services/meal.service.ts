import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../meal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'http://localhost:3000/api/meals';

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

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl);
  }

  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.apiUrl, meal);
  }

  updateMeal(id: string, meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.apiUrl}/${id}`, meal);
  }

  deleteMeal(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDailyMeal(): Meal | null {
    return this.dailyMeal;
  }

  selectRandomMeal(): Meal {
    const randomIndex = Math.floor(Math.random() * this.meals.length);
    return this.meals[randomIndex];
  }

  setRandomDailyMealIfNone(): void {
    if (!this.dailyMeal && this.meals.length > 0) {
      this.dailyMeal = this.selectRandomMeal();
    }
  }
}
