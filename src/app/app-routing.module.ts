import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  {path: "", component: MainLayoutComponent, children: [
    {path: "", component: HomeComponent},
    {path: "categorias", component: CategoriesComponent},
    {path: "quiz/:id", component: QuizComponent},
    {path: "*", component: ErrorComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
