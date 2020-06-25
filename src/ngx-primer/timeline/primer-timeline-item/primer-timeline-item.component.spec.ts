import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTimelineItemComponent } from './primer-timeline-item.component';

describe('PrimerTimelineItemComponent', () => {
  let component: PrimerTimelineItemComponent;
  let fixture: ComponentFixture<PrimerTimelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTimelineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
