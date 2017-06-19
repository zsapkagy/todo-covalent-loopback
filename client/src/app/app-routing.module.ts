import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "app/page-not-found.component";
import { MainComponent } from "app/main/main.component";

const routes: Routes = [
  { path: '',   redirectTo: '/todos', pathMatch: 'full' },
  {
      path: '404',
      component: PageNotFoundComponent
  },
  {
      path: '',
      component: MainComponent,
      children: [
        { path: 'todos', loadChildren: 'app/todo/todo.module#TodoModule' },
        { path: 'oo-todos', loadChildren: 'app/over-modularized/over-modularized.module#OverModularizedModule' },
      ]
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
