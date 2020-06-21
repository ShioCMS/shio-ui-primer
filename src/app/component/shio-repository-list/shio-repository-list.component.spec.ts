import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioRepositoryListComponent } from './shio-repository-list.component';

describe('ShioRepositoryListComponent', () => {
  let component: ShioRepositoryListComponent;
  let fixture: ComponentFixture<ShioRepositoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioRepositoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioRepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
