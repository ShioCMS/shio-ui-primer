import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDropdownMenu } from './primer-dropdown-menu.component';

describe('PrimerDropdownMenu', () => {
  let component: PrimerDropdownMenu;
  let fixture: ComponentFixture<PrimerDropdownMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDropdownMenu ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDropdownMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
