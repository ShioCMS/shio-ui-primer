import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuItemComponent } from './primer-select-menu-item.component';

describe('PrimerSelectMenuItemComponent', () => {
  let component: PrimerSelectMenuItemComponent;
  let fixture: ComponentFixture<PrimerSelectMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
