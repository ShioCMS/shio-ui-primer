import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioTextAreaWidgetComponent } from './shio-text-area-widget.component';

describe('ShioTextAreaWidgetComponent', () => {
  let component: ShioTextAreaWidgetComponent;
  let fixture: ComponentFixture<ShioTextAreaWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioTextAreaWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioTextAreaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
