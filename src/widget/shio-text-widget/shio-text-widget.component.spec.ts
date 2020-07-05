import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioTextWidgetComponent } from './shio-text-widget.component';

describe('ShioTextWidgetComponent', () => {
  let component: ShioTextWidgetComponent;
  let fixture: ComponentFixture<ShioTextWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioTextWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioTextWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
