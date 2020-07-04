import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioPostTypePageComponent } from './shio-post-type-page.component';

describe('ShioPostTypePageComponent', () => {
  let component: ShioPostTypePageComponent;
  let fixture: ComponentFixture<ShioPostTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioPostTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioPostTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
