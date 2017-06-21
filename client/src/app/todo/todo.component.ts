import { Component, OnInit } from '@angular/core';
import { TodoApi, Todo } from "app/shared/sdk";
import { Observable } from "rxjs/Observable";
import { TdLoadingService, TdDialogService } from '@covalent/core';
import { MdSnackBar } from '@angular/material';
import { TodosService } from "app/core/todos.service";


@Component({
  selector: 'poc-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Observable<Array<Todo>>;

  constructor(
    private todosService: TodosService,
    private todoApi: TodoApi,
    private loadingService: TdLoadingService,
    private snackBarService: MdSnackBar,
    private dialogService: TdDialogService
  ) {
    this.todos = this.todosService.todos;
  }

  ngOnInit() {
    console.log('todoComponent ngOnInit');

    // this.refreshTodoList();
  }

  onAddTodo(todo: Todo) {
    // this.todoApi.create(todo)
    // .subscribe((result) => {
    //   // this.refreshTodoList();
    //   this.todos.push(result);
    //   this.snackBarService.open('Todo created', 'Ok', { duration: 2000 });
    // })
  }

  onDeleteTodo(todo: Todo) {
    // this.dialogService
    //   .openConfirm({message: 'Are you sure you want to delete this todo?'})
    //   .afterClosed().subscribe((confirm: boolean) => {
    //     if (confirm) {
    //       this.loadingService.register('users.list');
    //       this.todoApi.deleteById(todo.id)
    //       .subscribe((result) => {
    //         this.loadingService.resolve('users.list');
    //         this.snackBarService.open('Todo deleted', 'Ok');
    //         this.refreshTodoList();
    //       });
    //     }
    //   });
  }

  onToggleDoneTodo(todo: Todo) {
    // this.todoApi.patchAttributes(todo.id, {done: !todo.done})
    // .subscribe((result) => {
    //   this.refreshTodoList();
    //   this.snackBarService.open(`Todo ${result.done ? '' : 'not'} done`, 'Ok',
    //   {
    //     duration: 2000,
    //     extraClasses: ['success']
    //   });
    // })
  }

  refreshTodoList() {
    // this.loadingService.register('loader');
    // this.todoApi.find({})
    // .subscribe((result) => {
    //   this.todos = result as Todo[];
    //   setTimeout(() => {
    //     this.loadingService.resolve('loader');
    //   }, 500);
    // });
  }

}
