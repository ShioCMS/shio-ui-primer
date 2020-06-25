import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerStateComponent } from './primer-state.component';

describe('PrimerStateComponent', () => {
  let component: PrimerStateComponent;
  let fixture: ComponentFixture<PrimerStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
