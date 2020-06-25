import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFlexComponent } from './primer-flex.component';

describe('PrimerFlexComponent', () => {
  let component: PrimerFlexComponent;
  let fixture: ComponentFixture<PrimerFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
