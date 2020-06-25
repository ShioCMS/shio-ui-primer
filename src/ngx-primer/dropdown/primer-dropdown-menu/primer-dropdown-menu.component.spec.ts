import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDropdownMenuComponent } from './primer-dropdown-menu.component';

describe('PrimerDropdownMenuComponent', () => {
  let component: PrimerDropdownMenuComponent;
  let fixture: ComponentFixture<PrimerDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
