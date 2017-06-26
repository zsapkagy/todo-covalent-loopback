import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";

import { Todo } from "app/shared/sdk";
import { TodosService } from "app/core/todos.service";

@Component({
  selector: 'poc-om-todo-list',
  templateUrl: './om-list.component.html',
  styleUrls: ['./om-list.component.scss']
})
export class OmListComponent implements OnInit {
  todos: Observable<Array<Todo>>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {
    this.todos = this.todosService.todos;
  }

  ngOnInit() {
  }

  onDelete(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }

  onToggleDone(todo: Todo) {
    this.todosService.toggleTodo(todo);
  }

  onEdit(todo: Todo) {
    this.router.navigate(['../edit', todo.id], { relativeTo: this.route });
  }

}
