import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsPencil } from './octicons-pencil.component';

describe('OcticonsPencil', () => {
  let component: OcticonsPencil;
  let fixture: ComponentFixture<OcticonsPencil>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsPencil ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsPencil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
