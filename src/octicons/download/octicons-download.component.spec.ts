import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsDownload } from './octicons-download.component';

describe('OcticonsDownload', () => {
  let component: OcticonsDownload;
  let fixture: ComponentFixture<OcticonsDownload>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsDownload ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsDownload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
