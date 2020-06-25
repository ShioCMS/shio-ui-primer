import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFixedComponent } from './primer-fixed.component';

describe('PrimerFixedComponent', () => {
  let component: PrimerFixedComponent;
  let fixture: ComponentFixture<PrimerFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
