import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioModelingPageComponent } from './shio-modeling-page.component';

describe('ShioModelingPageComponent', () => {
  let component: ShioModelingPageComponent;
  let fixture: ComponentFixture<ShioModelingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioModelingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioModelingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
