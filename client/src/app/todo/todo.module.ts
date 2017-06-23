import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from "app/todo/todo-routing.module";
import { TodoListComponent } from "app/todo/todo-list/todo-list.component";
import { TodoHeaderComponent } from "app/todo/todo-header/todo-header.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule,
  ],
  exports: [],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoHeaderComponent,
  ],
  providers: [],
})
export class TodoModule { }
