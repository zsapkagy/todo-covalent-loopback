import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TodosService } from "app/core/todos.service";
import { Observable } from 'rxjs/Observable';
import { Todo } from "app/shared/sdk";

@Injectable()
export class TodosResolve implements Resolve<any> {
  constructor(private todoService: TodosService) { }

  resolve(route: ActivatedRouteSnapshot){
    var promise = new Promise<any>((resolve, reject) => {
      this.todoService.todos.subscribe(result => {
        if (result && result.length > 0) {
          resolve(result);
        }
      });
    });

    return promise;
  }
}
