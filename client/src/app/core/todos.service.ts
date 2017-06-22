import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { TdLoadingService, TdDialogService } from "@covalent/core";

import { Todo, TodoApi } from "app/shared/sdk";

@Injectable()
export class TodosService {
  private _todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  constructor(
    private dialogService: TdDialogService,
    private loadingService: TdLoadingService,
    private snackBarService: MdSnackBar,
    private todoApi: TodoApi,
  ) {
    this.loadTodos();
  }

  get todos(): Observable<Todo[]> {
    return this._todos.asObservable();
  }

  loadTodos() {
    return this.todoApi.find({})
    .subscribe(((result) => {
      this._todos.next(result as Todo[]);
    }).bind(this));
  }

  addTodo(todo: Todo) {
    this.loadingService.register('loader');
    this.todoApi.create(todo)
    .subscribe(((newTodo) => {
      this._todos.getValue().push(newTodo);
      this._todos.next(this._todos.getValue());
      this.snackBarService.open('Todo created', 'Ok', { duration: 2000 });
      this.loadingService.resolve('loader');
    }).bind(this))
  }

}
