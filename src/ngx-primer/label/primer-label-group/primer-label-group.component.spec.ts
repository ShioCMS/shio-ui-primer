import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerLabelGroupComponent } from './primer-label-group.component';

describe('PrimerLabelGroupComponent', () => {
  let component: PrimerLabelGroupComponent;
  let fixture: ComponentFixture<PrimerLabelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerLabelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerLabelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
