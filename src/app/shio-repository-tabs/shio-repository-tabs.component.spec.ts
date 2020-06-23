import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioRepositoryTabsComponent } from './shio-repository-tabs.component';

describe('ShioRepositoryTabsComponent', () => {
  let component: ShioRepositoryTabsComponent;
  let fixture: ComponentFixture<ShioRepositoryTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioRepositoryTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioRepositoryTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
