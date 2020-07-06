import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioLogoComponent } from './shio-logo.component';

describe('ShioLogoComponent', () => {
  let component: ShioLogoComponent;
  let fixture: ComponentFixture<ShioLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
