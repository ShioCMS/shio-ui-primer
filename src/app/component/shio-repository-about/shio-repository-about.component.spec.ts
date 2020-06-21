import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioRepositoryAboutComponent } from './shio-repository-about.component';

describe('ShioRepositoryAboutComponent', () => {
  let component: ShioRepositoryAboutComponent;
  let fixture: ComponentFixture<ShioRepositoryAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioRepositoryAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioRepositoryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
