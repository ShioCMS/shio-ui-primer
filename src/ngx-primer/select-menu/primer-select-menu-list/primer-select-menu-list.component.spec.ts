import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuListComponent } from './primer-select-menu-list.component';

describe('PrimerSelectMenuListComponent', () => {
  let component: PrimerSelectMenuListComponent;
  let fixture: ComponentFixture<PrimerSelectMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
