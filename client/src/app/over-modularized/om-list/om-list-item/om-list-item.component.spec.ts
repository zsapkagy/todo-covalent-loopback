import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmListItemComponent } from './om-list-item.component';

describe('OmListItemComponent', () => {
  let component: OmListItemComponent;
  let fixture: ComponentFixture<OmListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
