import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioHeaderComponent } from './shio-header.component';

describe('ShioHeaderComponent', () => {
  let component: ShioHeaderComponent;
  let fixture: ComponentFixture<ShioHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
