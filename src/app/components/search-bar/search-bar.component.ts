import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [MatInputModule, FormsModule]
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  onSearchChange(): void {
    this.search.emit(this.searchTerm);
  }
}