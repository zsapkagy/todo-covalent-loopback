import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmDetailsComponent } from './om-details.component';

describe('OmDetailsComponent', () => {
  let component: OmDetailsComponent;
  let fixture: ComponentFixture<OmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
