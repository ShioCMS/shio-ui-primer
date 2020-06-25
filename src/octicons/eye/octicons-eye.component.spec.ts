import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsEye } from './octicons-eye.component';

describe('OcticonsEye', () => {
  let component: OcticonsEye;
  let fixture: ComponentFixture<OcticonsEye>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsEye ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsEye);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
