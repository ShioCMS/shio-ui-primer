import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTimelineComponent } from './primer-timeline.component';

describe('PrimerTimelineComponent', () => {
  let component: PrimerTimelineComponent;
  let fixture: ComponentFixture<PrimerTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
