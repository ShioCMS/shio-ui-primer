import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDialogComponent } from './primer-dialog.component';

describe('PrimerDialogComponent', () => {
  let component: PrimerDialogComponent;
  let fixture: ComponentFixture<PrimerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
