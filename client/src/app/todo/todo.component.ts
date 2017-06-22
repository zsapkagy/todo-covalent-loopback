import { Component, OnInit } from '@angular/core';
import { TodoApi, Todo } from "app/shared/sdk";
import { Observable } from "rxjs/Observable";
import { TodosService } from "app/core/todos.service";


@Component({
  selector: 'poc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Observable<Array<Todo>>;

  constructor(
    private todosService: TodosService,
  ) {
    this.todos = this.todosService.todos;
  }

  ngOnInit() {
  }

  onAddTodo(todo: Todo) {
    this.todosService.addTodo(todo);
  }

  onDeleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }

  onToggleDoneTodo(todo: Todo) {
    this.todosService.toggleTodo(todo);
  }
}
