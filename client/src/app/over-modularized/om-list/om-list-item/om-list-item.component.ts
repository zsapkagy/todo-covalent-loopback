import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from "app/shared/sdk";

@Component({
  selector: 'poc-om-list-item',
  template: `
  <div layout="row" layout-padding [ngClass]="{done: item.done}">
    <button md-button (click)="onToggleDone(item)"><md-icon>check</md-icon></button>
    <span flex>{{ item.name }}</span>
    <md-icon [ngClass]="item.priority | priorityClass" class="flag">flag</md-icon>
    <button md-mini-fab (click)="onDelete(item)"><md-icon>delete</md-icon></button>
  </div>
  `,
  styleUrls: ['./om-list-item.component.scss']
})
export class OmListItemComponent implements OnInit {
  @Input()
  item: Todo;

  @Output()
  toggleDone: EventEmitter<Todo> = new EventEmitter();

  @Output()
  delete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleDone(item: Todo){
    this.toggleDone.emit(item);
  }

  onDelete(item: Todo){
    this.delete.emit(item);
  }

}
