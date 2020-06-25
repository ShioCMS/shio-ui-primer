import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPaginationComponent } from './primer-pagination.component';

describe('PrimerPaginationComponent', () => {
  let component: PrimerPaginationComponent;
  let fixture: ComponentFixture<PrimerPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
