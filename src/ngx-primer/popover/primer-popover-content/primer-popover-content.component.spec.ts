import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPopoverContentComponent } from './primer-popover-content.component';

describe('PrimerPopoverContentComponent', () => {
  let component: PrimerPopoverContentComponent;
  let fixture: ComponentFixture<PrimerPopoverContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerPopoverContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerPopoverContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
