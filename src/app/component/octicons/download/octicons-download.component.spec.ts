import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsDownloadComponent } from './octicons-download.component';

describe('OcticonsDownloadComponent', () => {
  let component: OcticonsDownloadComponent;
  let fixture: ComponentFixture<OcticonsDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
