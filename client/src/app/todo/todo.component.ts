import { Component, OnInit } from '@angular/core';
import { TodoApi, Todo } from "app/shared/sdk";
import { Observable } from "rxjs/Observable";
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'poc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoApi: TodoApi, private loadingService: TdLoadingService) { }

  ngOnInit() {
    this.refreshTodoList();
  }

  onAddTodo(todo: Todo) {
    this.todoApi.create(todo)
    .subscribe((result) => {
      // this.refreshTodoList();
      this.todos.push(result);
    })
  }

  onDeleteTodo(todo: Todo) {
    this.todoApi.deleteById(todo.id)
    .subscribe((result) => {
      this.refreshTodoList();
    })
  }

  onToggleDoneTodo(todo: Todo) {
    this.todoApi.patchAttributes(todo.id, {done: !todo.done})
    .subscribe((result) => {
      this.refreshTodoList();
    })
  }

  refreshTodoList() {
    this.loadingService.register('loader');
    this.todoApi.find({})
    .subscribe((result) => {
      this.todos = result as Todo[];
      setTimeout(() => {
        this.loadingService.resolve('loader');
      }, 500);
    });
  }

}
