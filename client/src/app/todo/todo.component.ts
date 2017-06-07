import { Component, OnInit } from '@angular/core';
import { TodoApi, Todo } from "app/shared/sdk";

@Component({
  selector: 'poc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoApi: TodoApi) { }


  ngOnInit() {
    this.todoApi.find({})
    .subscribe((result) => {
      this.todos = result as Todo[];
    })
  }

}
