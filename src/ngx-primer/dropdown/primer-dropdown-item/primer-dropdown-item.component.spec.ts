import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDropdownItemComponent } from './primer-dropdown-item.component';

describe('PrimerDropdownItemComponent', () => {
  let component: PrimerDropdownItemComponent;
  let fixture: ComponentFixture<PrimerDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
