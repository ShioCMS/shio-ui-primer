import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioObjectActionsComponent } from './shio-object-actions.component';

describe('ShioObjectActionsComponent', () => {
  let component: ShioObjectActionsComponent;
  let fixture: ComponentFixture<ShioObjectActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioObjectActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioObjectActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
