import { Component, OnInit, Input } from '@angular/core';

import { Todo } from "app/shared/sdk";

@Component({
  selector: 'poc-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  @Input()
  todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
