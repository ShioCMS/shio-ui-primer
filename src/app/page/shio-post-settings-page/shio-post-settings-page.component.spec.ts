import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioPostSettingsPageComponent } from './shio-post-settings-page.component';

describe('ShioPostSettingsPageComponent', () => {
  let component: ShioPostSettingsPageComponent;
  let fixture: ComponentFixture<ShioPostSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioPostSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioPostSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
