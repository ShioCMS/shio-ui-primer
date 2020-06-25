import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsFileDirectory } from './octicons-file-directory.component';

describe('OcticonsFileDirectory', () => {
  let component: OcticonsFileDirectory;
  let fixture: ComponentFixture<OcticonsFileDirectory>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsFileDirectory ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsFileDirectory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
