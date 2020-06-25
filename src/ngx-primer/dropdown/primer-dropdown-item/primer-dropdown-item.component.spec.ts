import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDropdownItem } from './primer-dropdown-item.component';

describe('PrimerDropdownItem', () => {
  let component: PrimerDropdownItem;
  let fixture: ComponentFixture<PrimerDropdownItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDropdownItem ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDropdownItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
