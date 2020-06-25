import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuTabPanelComponent } from './primer-select-menu-tab-panel.component';

describe('PrimerSelectMenuTabPanelComponent', () => {
  let component: PrimerSelectMenuTabPanelComponent;
  let fixture: ComponentFixture<PrimerSelectMenuTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
