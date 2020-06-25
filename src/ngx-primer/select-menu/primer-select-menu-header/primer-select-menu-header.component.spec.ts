import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuHeaderComponent } from './primer-select-menu-header.component';

describe('PrimerSelectMenuHeaderComponent', () => {
  let component: PrimerSelectMenuHeaderComponent;
  let fixture: ComponentFixture<PrimerSelectMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
