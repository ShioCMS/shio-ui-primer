import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsHistory } from './octicons-history.component';

describe('OcticonsHistory', () => {
  let component: OcticonsHistory;
  let fixture: ComponentFixture<OcticonsHistory>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsHistory ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
