import { Component, OnInit } from '@angular/core';

import { Todo } from "app/shared/sdk";
import { TodosService } from "app/core/todos.service";

@Component({
  selector: 'app-om-edit',
  templateUrl: './om-edit.component.html',
  styleUrls: ['./om-edit.component.scss']
})
export class OmEditComponent implements OnInit {
  todo: Todo;

  constructor(private todosService:TodosService) {
    this.todo = new Todo();
  }

  ngOnInit() {
  }

  goBack(): void {
    window.history.back();
  }

  save(): void {
    this.todosService.addTodo(this.todo).subscribe(() => {
      this.goBack();
    });
  }
}
