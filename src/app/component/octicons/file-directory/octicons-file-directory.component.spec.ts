import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsFileDirectoryComponent } from './octicons-file-directory.component';

describe('OcticonsFileDirectoryComponent', () => {
  let component: OcticonsFileDirectoryComponent;
  let fixture: ComponentFixture<OcticonsFileDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsFileDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsFileDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
