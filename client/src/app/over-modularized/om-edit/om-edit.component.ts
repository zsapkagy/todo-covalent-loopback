import { Component, OnInit } from '@angular/core';

import { Todo } from "app/shared/sdk";
import { TodosService } from "app/core/todos.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-om-edit',
  templateUrl: './om-edit.component.html',
  styleUrls: ['./om-edit.component.scss']
})
export class OmEditComponent implements OnInit {
  todo: Todo;
  editMode: Boolean;

  constructor(
    private todosService:TodosService,
    private route: ActivatedRoute,
  ) {
    this.todo = new Todo();
  }

  ngOnInit() {
    // (+) converts string 'id' to a number
    let id = +this.route.snapshot.params['id'];
    this.editMode = !!id;
    if (this.editMode) {
     this.todosService.getTodo(id)
        .subscribe((todo: Todo) => this.todo = todo);
    }
  }

  goBack(): void {
    window.history.back();
  }

  save(): void {
    if (this.editMode) {
      this.todosService.updateTodo(this.todo).subscribe(() => {
        this.goBack();
      });
    } else {
      this.todosService.addTodo(this.todo).subscribe(() => {
        this.goBack();
      });
    }
  }
}
