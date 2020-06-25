import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsCode } from './octicons-code.component';

describe('OcticonsCode', () => {
  let component: OcticonsCode;
  let fixture: ComponentFixture<OcticonsCode>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsCode ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
