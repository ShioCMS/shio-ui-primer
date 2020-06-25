import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDropdownComponent } from './primer-dropdown.component';

describe('PrimerDropdownComponent', () => {
  let component: PrimerDropdownComponent;
  let fixture: ComponentFixture<PrimerDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
