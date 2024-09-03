import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../meal.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

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

  meals: Meal[] = [
    {
      id: 0,
      title: 'Spaghetti Bolognese',
      ingredients: ['Spaghetti', 'Tomato Sauce', 'Ground Beef' ],
      timeToCook: 45,
      effortLevel: 3,
      imageUrl: 'spaghettiBolognese.webp'
    },
    {
      id: 1,
      title: 'Caesar Salad',
      ingredients: [ 'Lettuce', 'Croutons', 'Caesar Dressing' ],
      timeToCook: 20,
      effortLevel: 1,
      imageUrl: 'caesarSalad.webp'
    }
    // Add more meals as needed
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capture the title from the route parameters
    this.mealId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Meal ID:', this.mealId);
    // Find the meal that matches the title
    this.meal = this.meals.find(m => m.id === this.mealId);
    console.log('Found Meal:', this.meal);
  }
}
