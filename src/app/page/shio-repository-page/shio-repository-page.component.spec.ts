import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioRepositoryPageComponent } from './shio-repository-page.component';

describe('ShioRepositoryPageComponent', () => {
  let component: ShioRepositoryPageComponent;
  let fixture: ComponentFixture<ShioRepositoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioRepositoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioRepositoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
