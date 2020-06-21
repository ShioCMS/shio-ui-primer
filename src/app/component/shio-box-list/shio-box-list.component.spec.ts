import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioBoxListComponent } from './shio-box-list.component';

describe('ShioBoxListComponent', () => {
  let component: ShioBoxListComponent;
  let fixture: ComponentFixture<ShioBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
