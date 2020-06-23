import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioContentPageComponent } from './shio-content-page.component';

describe('ShioContentPageComponent', () => {
  let component: ShioContentPageComponent;
  let fixture: ComponentFixture<ShioContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
