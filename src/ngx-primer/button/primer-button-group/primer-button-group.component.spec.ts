import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerButtonGroupComponent } from './primer-button-group.component';

describe('PrimerButtonGroupComponent', () => {
  let component: PrimerButtonGroupComponent;
  let fixture: ComponentFixture<PrimerButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
