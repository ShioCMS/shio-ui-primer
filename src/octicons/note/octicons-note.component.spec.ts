import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsNote } from './octicons-note.component';

describe('OcticonsNote', () => {
  let component: OcticonsNote;
  let fixture: ComponentFixture<OcticonsNote>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsNote ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
