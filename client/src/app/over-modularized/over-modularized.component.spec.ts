import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverModularizedComponent } from './over-modularized.component';

describe('OverModularizedComponent', () => {
  let component: OverModularizedComponent;
  let fixture: ComponentFixture<OverModularizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverModularizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverModularizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
