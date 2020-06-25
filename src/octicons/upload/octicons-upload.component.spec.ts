import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsUpload } from './octicons-upload.component';

describe('OcticonsUpload', () => {
  let component: OcticonsUpload;
  let fixture: ComponentFixture<OcticonsUpload>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsUpload ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
