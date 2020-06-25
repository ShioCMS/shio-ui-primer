import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsPackage } from './octicons-package.component';

describe('OcticonsPackage', () => {
  let component: OcticonsPackage;
  let fixture: ComponentFixture<OcticonsPackage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsPackage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsPackage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
