import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsNoteComponent } from './octicons-note.component';

describe('OcticonsNoteComponent', () => {
  let component: OcticonsNoteComponent;
  let fixture: ComponentFixture<OcticonsNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
