import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSelectMenuModalComponent } from './primer-select-menu-modal.component';

describe('PrimerSelectMenuModalComponent', () => {
  let component: PrimerSelectMenuModalComponent;
  let fixture: ComponentFixture<PrimerSelectMenuModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSelectMenuModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSelectMenuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
