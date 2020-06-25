import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPopoverComponent } from './primer-popover.component';

describe('PrimerPopoverComponent', () => {
  let component: PrimerPopoverComponent;
  let fixture: ComponentFixture<PrimerPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
