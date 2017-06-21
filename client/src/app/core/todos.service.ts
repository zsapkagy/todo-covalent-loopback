import { Injectable } from '@angular/core';
import { Todo, TodoApi } from "app/shared/sdk";
import { TdLoadingService } from "@covalent/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodosService {
  private _todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  constructor(
    private todoApi: TodoApi,
    private loadingService: TdLoadingService,
  ) {
    this.refreshTodos();
  }

  get todos(): Observable<Todo[]> {
    return this._todos.asObservable();
  }

  refreshTodos() {
    // this.loadingService.register('loader');
    return this.todoApi.find({})
    .subscribe(((result) => {
      this._todos.next(result as Todo[]);
      // setTimeout((() => {
      //   this._todos.next(result as Todo[]);
      //   // this.loadingService.resolve('loader');
      // }).bind(this), 2000);
    }).bind(this));
  }

}
