import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "app/core/page-not-found.component";
import { MainComponent } from "app/core/main/main.component";
import { TodosResolve } from "app/core/todos.resolve";

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
        { path: 'todos', loadChildren: 'app/todo/todo.module#TodoModule', resolve: { todosResolve: TodosResolve } },
        { path: 'oo-todos', loadChildren: 'app/over-modularized/over-modularized.module#OverModularizedModule', resolve: { todosResolve: TodosResolve } },
      ]
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
