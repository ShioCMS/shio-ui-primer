import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerStateLabelComponent } from './primer-state-label.component';

describe('PrimerStateLabelComponent', () => {
  let component: PrimerStateLabelComponent;
  let fixture: ComponentFixture<PrimerStateLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerStateLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerStateLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
