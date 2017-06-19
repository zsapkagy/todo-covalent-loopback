import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMmEditComponent } from './todo-mm-edit.component';

describe('TodoMmEditComponent', () => {
  let component: TodoMmEditComponent;
  let fixture: ComponentFixture<TodoMmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
