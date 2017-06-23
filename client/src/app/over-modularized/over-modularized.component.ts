import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Todo } from "app/shared/sdk";
import { TodosService } from "app/core/todos.service";

@Component({
  templateUrl: './over-modularized.component.html',
  styleUrls: ['./over-modularized.component.scss']
})
export class OverModularizedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // onAddTodo(todo: Todo) {
  //   this.todosService.addTodo(todo);
  // }
}
