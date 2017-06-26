import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/distinctUntilChanged';

import { Todo } from "app/shared/sdk";
import { TodosService } from "app/core/todos.service";

@Component({
  selector: 'poc-om-todo-list',
  templateUrl: './om-list.component.html',
  styleUrls: ['./om-list.component.scss']
})
export class OmListComponent implements OnInit {
  todos: Todo[];
  searchInputTerm: BehaviorSubject<string> = new BehaviorSubject(null);
  sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {
  }

  ngOnInit() {
    this.todosService.todos.subscribe((todos) => {
      this.filter(todos);
    });
    this.sub = this.searchInputTerm
      .distinctUntilChanged()
      .subscribe((term => {
        this.filter(this.todosService.getTodoValues(), this.searchInputTerm);
      }))
  }

  onDelete(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }

  onToggleDone(todo: Todo) {
    this.todosService.toggleTodo(todo);
  }

  onEdit(todo: Todo) {
    this.router.navigate(['../edit', todo.id], { relativeTo: this.route });
  }

  filter(todos: Todo[], term: BehaviorSubject<string> = new BehaviorSubject(null)) {
    if (!!todos) {
      if (term && !!term.getValue()) {
        this.todos = todos.filter(todo => {return todo.name.search(term.getValue()) > -1});
      } else {
        this.todos = todos;
      }
    }
  }

  onDestroy() {
    this.sub.unsubscribe();
  }

}
