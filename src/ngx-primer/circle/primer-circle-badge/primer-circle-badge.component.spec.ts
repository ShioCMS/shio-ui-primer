import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerCircleBadgeComponent } from './primer-circle-badge.component';

describe('PrimerCircleBadgeComponent', () => {
  let component: PrimerCircleBadgeComponent;
  let fixture: ComponentFixture<PrimerCircleBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerCircleBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerCircleBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
