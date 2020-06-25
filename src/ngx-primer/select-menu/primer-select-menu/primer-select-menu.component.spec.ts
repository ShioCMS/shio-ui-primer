import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuComponent } from './primer-select-menu.component';

describe('PrimerSelectMenuComponent', () => {
  let component: PrimerSelectMenuComponent;
  let fixture: ComponentFixture<PrimerSelectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
