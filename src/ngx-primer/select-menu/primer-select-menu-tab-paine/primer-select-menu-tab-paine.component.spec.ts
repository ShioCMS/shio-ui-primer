import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuTabPaineComponent } from './primer-select-menu-tab-paine.component';

describe('PrimerSelectMenuTabPaineComponent', () => {
  let component: PrimerSelectMenuTabPaineComponent;
  let fixture: ComponentFixture<PrimerSelectMenuTabPaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuTabPaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuTabPaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
