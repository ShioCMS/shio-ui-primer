import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsPackageComponent } from './octicons-package.component';

describe('OcticonsPackageComponent', () => {
  let component: OcticonsPackageComponent;
  let fixture: ComponentFixture<OcticonsPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
