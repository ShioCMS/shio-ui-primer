import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsGear } from './octicons-gear.component';

describe('OcticonsGear', () => {
  let component: OcticonsGear;
  let fixture: ComponentFixture<OcticonsGear>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsGear ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsGear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
