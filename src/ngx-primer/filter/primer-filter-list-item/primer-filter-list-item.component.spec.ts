import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFilterListItemComponent } from './primer-filter-list-item.component';

describe('PrimerFilterListItemComponent', () => {
  let component: PrimerFilterListItemComponent;
  let fixture: ComponentFixture<PrimerFilterListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerFilterListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFilterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
