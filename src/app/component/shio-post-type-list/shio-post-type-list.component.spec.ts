import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioPostTypeListComponent } from './shio-post-type-list.component';

describe('ShioPostTypeListComponent', () => {
  let component: ShioPostTypeListComponent;
  let fixture: ComponentFixture<ShioPostTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioPostTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioPostTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
