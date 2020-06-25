import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerCaretSelectorComponent } from './primer-caret-selector.component';

describe('PrimerCaretSelectorComponent', () => {
  let component: PrimerCaretSelectorComponent;
  let fixture: ComponentFixture<PrimerCaretSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerCaretSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerCaretSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
