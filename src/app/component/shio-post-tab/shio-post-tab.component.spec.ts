import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioPostTabComponent } from './shio-post-tab.component';

describe('ShioPostTabComponent', () => {
  let component: ShioPostTabComponent;
  let fixture: ComponentFixture<ShioPostTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioPostTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioPostTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
