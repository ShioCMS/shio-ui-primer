import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDropdownButtonComponent } from './primer-dropdown-button.component';

describe('PrimerDropdownButtonComponent', () => {
  let component: PrimerDropdownButtonComponent;
  let fixture: ComponentFixture<PrimerDropdownButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDropdownButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
