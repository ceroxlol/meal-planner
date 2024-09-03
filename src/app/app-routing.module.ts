import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './components/meal-list/meal-list.component';

export const routes: Routes = [
  { path: '', component: MealListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
