import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuTabsComponent } from './primer-select-menu-tabs.component';

describe('PrimerSelectMenuTabsComponent', () => {
  let component: PrimerSelectMenuTabsComponent;
  let fixture: ComponentFixture<PrimerSelectMenuTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
