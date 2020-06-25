import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDropdown } from './primer-dropdown.component';

describe('PrimerDropdown', () => {
  let component: PrimerDropdown;
  let fixture: ComponentFixture<PrimerDropdown>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDropdown ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
