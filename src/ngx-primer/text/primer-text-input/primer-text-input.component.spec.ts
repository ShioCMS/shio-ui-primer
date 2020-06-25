import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTextInputComponent } from './primer-text-input.component';

describe('PrimerTextInputComponent', () => {
  let component: PrimerTextInputComponent;
  let fixture: ComponentFixture<PrimerTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
