import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerHeadingComponent } from './primer-heading.component';

describe('PrimerHeadingComponent', () => {
  let component: PrimerHeadingComponent;
  let fixture: ComponentFixture<PrimerHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
