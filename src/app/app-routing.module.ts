import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';

export const routes: Routes = [
  { path: '', component: MealListComponent },
  { path: 'meal-details/:id', component: MealDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
