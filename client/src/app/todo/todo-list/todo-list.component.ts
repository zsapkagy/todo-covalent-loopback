import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from "app/shared/sdk";

@Component({
  selector: 'poc-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Todo[];

  @Output()
  delete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleDone: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onDelete(item: Todo) {
    this.delete.emit(item);
  }

  onToggleDone(item: Todo) {
    this.toggleDone.emit(item);
  }

}
