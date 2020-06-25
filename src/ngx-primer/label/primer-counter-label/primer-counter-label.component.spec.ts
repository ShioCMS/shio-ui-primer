import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerCounterLabelComponent } from './primer-counter-label.component';

describe('PrimerCounterLabelComponent', () => {
  let component: PrimerCounterLabelComponent;
  let fixture: ComponentFixture<PrimerCounterLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerCounterLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerCounterLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
