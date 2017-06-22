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

  onError(error) {
    () => {
      console.log('onError', error);
      this.loadingService.resolve('loader');
      this.snackBarService.open(`The action failed`, 'Ok', { duration: 2000, extraClasses: ['error'] });
    }
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
    .subscribe(onSuccess.bind(this), this.onError);

    function onSuccess(newTodo: Todo) {
      this._todos.getValue().push(newTodo);
      this._todos.next(this._todos.getValue());
      this.snackBarService.open('Todo created', 'Ok', { duration: 2000 });
      this.loadingService.resolve('loader');
    }
  }

  deleteTodo(deletedTodo: Todo) {
    this.dialogService
      .openConfirm({message: 'Are you sure you want to delete this todo?'})
      .afterClosed().subscribe((confirm: boolean) => {
        if (confirm) {
          this.loadingService.register('loader');
          this.todoApi.deleteById(deletedTodo.id)
          .subscribe(onSuccess.bind(this), this.onError);
        }
      });

    function onSuccess(deletedTodoCount) {
      if (deletedTodoCount.count) {
        this.loadingService.resolve('loader');
        this._todos.next(this._todos.getValue().filter(todo => todo.id !== deletedTodo.id));
        this.snackBarService.open(`${deletedTodoCount.count} Todo deleted`, 'Ok');
      } else {
        this.onError();
      }
    }
  }

  toggleTodo(todo: Todo) {
    this.todoApi.patchAttributes(todo.id, {done: !todo.done})
    .subscribe(onSuccess.bind(this), this.onError);

    function onSuccess(toggledTodo) {
      this._todos.next(this._todos.getValue().map(item => {
        if (item.id === toggledTodo.id) {
          item.done = toggledTodo.done;
        }
        return item;
      }));
      this.snackBarService.open(`Todo ${todo.done ? '' : 'not'} done`, 'Ok',
      {
        duration: 2000,
        extraClasses: ['success']
      });
    }
  }

}
