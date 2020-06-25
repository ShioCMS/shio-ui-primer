import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsCodeComponent } from './octicons-code.component';

describe('OcticonsCodeComponent', () => {
  let component: OcticonsCodeComponent;
  let fixture: ComponentFixture<OcticonsCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
