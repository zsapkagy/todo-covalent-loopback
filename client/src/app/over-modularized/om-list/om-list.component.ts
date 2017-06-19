import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "app/shared/sdk";

@Component({
  selector: 'poc-om-todo-list',
  templateUrl: './om-list.component.html',
  styleUrls: ['./om-list.component.scss']
})
export class OmListComponent implements OnInit {
  @Input()
  todos: Todo[];

  @Output()
  toggleDone: EventEmitter<Todo> = new EventEmitter();

  @Output()
  delete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(item: Todo) {
    this.delete.emit(item);
  }

  onToggleDone(item: Todo) {
    this.toggleDone.emit(item);
  }

}
