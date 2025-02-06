import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../meal.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  //private apiUrl = 'http://localhost:3000/api/meals';
  private backendUrl = `${environment.backendUrl}/meals`;

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.backendUrl);
  }

  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.backendUrl, meal);
  }

  updateMeal(meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.backendUrl}/${meal._id}`, meal);
  }

  deleteMeal(id: string): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/${id}`);
  }

  getDailyMeal(): Observable<Meal> {
    return this.http.get<Meal>(`${this.backendUrl}/daily`);
  }

  resetDailyMeal(): Observable<Meal> {
    return this.http.post<Meal>(`${this.backendUrl}/daily/reset`, {});
  }
}
