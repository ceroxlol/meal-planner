import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../meal.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-details',
  standalone: true,
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css'],
  imports: [CommonModule, MatCardModule]
})
export class MealDetailsComponent implements OnInit {
  mealId: number | null = 1;
  meal: Meal | undefined;

  constructor(private route: ActivatedRoute, private mealService: MealService) {}

  ngOnInit(): void {
    // Capture the title from the route parameters
    this.mealId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Meal ID:', this.mealId);
    // Find the meal that matches the title
    this.meal = this.mealService.getMeals().find(m => m.id === this.mealId);
    console.log('Found Meal:', this.meal);
  }
}
