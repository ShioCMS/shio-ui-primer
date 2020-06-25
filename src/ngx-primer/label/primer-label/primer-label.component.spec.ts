import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerLabelComponent } from './primer-label.component';

describe('PrimerLabelComponent', () => {
  let component: PrimerLabelComponent;
  let fixture: ComponentFixture<PrimerLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
