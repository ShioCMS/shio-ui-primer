import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTimelineBadgeComponent } from './primer-timeline-badge.component';

describe('PrimerTimelineBadgeComponent', () => {
  let component: PrimerTimelineBadgeComponent;
  let fixture: ComponentFixture<PrimerTimelineBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTimelineBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTimelineBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
