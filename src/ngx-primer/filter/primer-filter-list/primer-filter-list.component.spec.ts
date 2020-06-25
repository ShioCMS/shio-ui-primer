import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFilterListComponent } from './primer-filter-list.component';

describe('PrimerFilterListComponent', () => {
  let component: PrimerFilterListComponent;
  let fixture: ComponentFixture<PrimerFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerFilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
