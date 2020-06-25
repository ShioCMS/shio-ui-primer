import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTimelineBodyComponent } from './primer-timeline-body.component';

describe('PrimerTimelineBodyComponent', () => {
  let component: PrimerTimelineBodyComponent;
  let fixture: ComponentFixture<PrimerTimelineBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTimelineBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTimelineBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
