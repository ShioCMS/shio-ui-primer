import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioPostTabsComponent } from './shio-post-tabs.component';

describe('ShioPostTabsComponent', () => {
  let component: ShioPostTabsComponent;
  let fixture: ComponentFixture<ShioPostTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioPostTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioPostTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
