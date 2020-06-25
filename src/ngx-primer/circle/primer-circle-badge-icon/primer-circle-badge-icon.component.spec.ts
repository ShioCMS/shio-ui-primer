import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerCircleBadgeIconComponent } from './primer-circle-badge-icon.component';

describe('PrimerCircleBadgeIconComponent', () => {
  let component: PrimerCircleBadgeIconComponent;
  let fixture: ComponentFixture<PrimerCircleBadgeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerCircleBadgeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerCircleBadgeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
