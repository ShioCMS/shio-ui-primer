import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsGearComponent } from './octicons-gear.component';

describe('OcticonsGearComponent', () => {
  let component: OcticonsGearComponent;
  let fixture: ComponentFixture<OcticonsGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
