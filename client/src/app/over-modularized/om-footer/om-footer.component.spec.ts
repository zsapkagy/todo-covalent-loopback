import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmFooterComponent } from './om-footer.component';

describe('OmFooterComponent', () => {
  let component: OmFooterComponent;
  let fixture: ComponentFixture<OmFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
