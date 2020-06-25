import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTooltipComponent } from './primer-tooltip.component';

describe('PrimerTooltipComponent', () => {
  let component: PrimerTooltipComponent;
  let fixture: ComponentFixture<PrimerTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
