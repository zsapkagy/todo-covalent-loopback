import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmEditComponent } from './om-edit.component';

describe('OmEditComponent', () => {
  let component: OmEditComponent;
  let fixture: ComponentFixture<OmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
