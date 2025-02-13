import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-effort-level',
  templateUrl: './effort-level.component.html',
  styleUrls: ['./effort-level.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule
  ],
})
export class EffortLevelComponent {
  @Input() level: number = 1;
  @Input() editable: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() levelChange = new EventEmitter<number>();

  get hats(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  onChange(newLevel: number): void {
    if (this.editable) {
      this.level = newLevel;
      this.levelChange.emit(newLevel);
    }
  }
}