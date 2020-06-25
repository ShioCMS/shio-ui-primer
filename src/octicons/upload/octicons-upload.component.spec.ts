import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsUploadComponent } from './octicons-upload.component';

describe('OcticonsUploadComponent', () => {
  let component: OcticonsUploadComponent;
  let fixture: ComponentFixture<OcticonsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
