import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../meal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private apiUrl = 'http://localhost:3000/api/meals';

  private meals: Meal[] = [];

  private dailyMeal: Meal | null = null;

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl);
  }

  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.apiUrl, meal);
  }

  updateMeal(meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.apiUrl}/${meal.id}`, meal);
  }

  deleteMeal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDailyMeal(): Meal | null {
    if (this.meals.length === 0) {
      this.getMeals().subscribe((meals) => {
        this.meals = meals;
        this.dailyMeal = this.selectRandomMeal();
      });
    }
    if (!this.dailyMeal && this.meals.length > 0) {
      this.dailyMeal = this.selectRandomMeal();
    }
    return this.dailyMeal;
  }

  selectRandomMeal(): Meal {
    const randomIndex = Math.floor(Math.random() * this.meals.length);
    return this.meals[randomIndex];
  }
}
