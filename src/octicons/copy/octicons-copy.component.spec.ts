import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsCopy } from './octicons-copy.component';

describe('OcticonsCopy', () => {
  let component: OcticonsCopy;
  let fixture: ComponentFixture<OcticonsCopy>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsCopy ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsCopy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
