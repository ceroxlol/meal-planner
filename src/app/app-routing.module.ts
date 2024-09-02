import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';

const routes: Routes = [
  { path: '', component: MealListComponent },
  { path: 'add-meal', component: AddMealComponent },
  { path: 'meal-detail/:id', component: MealDetailComponent },
  { path: '**', redirectTo: '' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
