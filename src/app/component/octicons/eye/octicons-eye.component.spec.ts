import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsEyeComponent } from './octicons-eye.component';

describe('OcticonsEyeComponent', () => {
  let component: OcticonsEyeComponent;
  let fixture: ComponentFixture<OcticonsEyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsEyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
