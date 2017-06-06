import { Component, OnInit } from '@angular/core';

import { Todo, TodoApi } from "app/shared/sdk";

@Component({
  selector: 'poc-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoApi: TodoApi) {

  }

  ngOnInit() {
    this.todoApi.find({})
    .subscribe((result) => {
      this.todos = result as Todo[];
    })
  }

}
