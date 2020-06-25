import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerAbsoluteComponent } from './primer-absolute.component';

describe('PrimerAbsoluteComponent', () => {
  let component: PrimerAbsoluteComponent;
  let fixture: ComponentFixture<PrimerAbsoluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerAbsoluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerAbsoluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
