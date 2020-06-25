import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuTabComponent } from './primer-select-menu-tab.component';

describe('PrimerSelectMenuTabComponent', () => {
  let component: PrimerSelectMenuTabComponent;
  let fixture: ComponentFixture<PrimerSelectMenuTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
