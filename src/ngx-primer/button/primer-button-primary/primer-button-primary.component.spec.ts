import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerButtonPrimaryComponent } from './primer-button-primary.component';

describe('PrimerButtonPrimaryComponent', () => {
  let component: PrimerButtonPrimaryComponent;
  let fixture: ComponentFixture<PrimerButtonPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerButtonPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerButtonPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
