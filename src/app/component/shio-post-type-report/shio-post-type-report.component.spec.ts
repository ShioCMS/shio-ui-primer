import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioPostTypeReportComponent } from './shio-post-type-report.component';

describe('ShioPostTypeReportComponent', () => {
  let component: ShioPostTypeReportComponent;
  let fixture: ComponentFixture<ShioPostTypeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioPostTypeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioPostTypeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
