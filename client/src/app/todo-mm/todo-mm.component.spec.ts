import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMmComponent } from './todo-mm.component';

describe('TodoMmComponent', () => {
  let component: TodoMmComponent;
  let fixture: ComponentFixture<TodoMmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
