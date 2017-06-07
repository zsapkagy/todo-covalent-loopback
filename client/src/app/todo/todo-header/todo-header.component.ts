import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Todo } from "app/shared/sdk";

@Component({
  selector: 'poc-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  newTodo: Todo;

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.newTodo = new Todo();
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
