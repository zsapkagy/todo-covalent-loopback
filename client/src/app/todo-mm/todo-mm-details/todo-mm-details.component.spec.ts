import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMmDetailsComponent } from './todo-mm-details.component';

describe('TodoMmDetailsComponent', () => {
  let component: TodoMmDetailsComponent;
  let fixture: ComponentFixture<TodoMmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
