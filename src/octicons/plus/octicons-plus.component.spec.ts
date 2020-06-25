import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsPlus } from './octicons-plus.component';

describe('OcticonsPlus', () => {
  let component: OcticonsPlus;
  let fixture: ComponentFixture<OcticonsPlus>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsPlus ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsPlus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
