import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFilteredSearchComponent } from './primer-filtered-search.component';

describe('PrimerFilteredSearchComponent', () => {
  let component: PrimerFilteredSearchComponent;
  let fixture: ComponentFixture<PrimerFilteredSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerFilteredSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFilteredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
