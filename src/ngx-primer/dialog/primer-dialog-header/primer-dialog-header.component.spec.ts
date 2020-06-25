import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDialogHeaderComponent } from './primer-dialog-header.component';

describe('PrimerDialogHeaderComponent', () => {
  let component: PrimerDialogHeaderComponent;
  let fixture: ComponentFixture<PrimerDialogHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDialogHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
