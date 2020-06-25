import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTextComponent } from './primer-text.component';

describe('PrimerTextComponent', () => {
  let component: PrimerTextComponent;
  let fixture: ComponentFixture<PrimerTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
