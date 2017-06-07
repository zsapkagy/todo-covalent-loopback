import { Component, OnInit, Input } from '@angular/core';

import { Todo, TodoApi } from "app/shared/sdk";

@Component({
  selector: 'poc-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Todo[];

  constructor() {
  }

  ngOnInit() {
  }

}
