import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from '../../meal.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ]
})
export class MealDetailComponent {
  @Input() meal: Meal | null = null;
  @Output() close = new EventEmitter<void>();

  closeOverlay(): void {
    this.close.emit();
  }
}
