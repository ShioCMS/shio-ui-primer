import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsCopyComponent } from './octicons-copy.component';

describe('OcticonsCopyComponent', () => {
  let component: OcticonsCopyComponent;
  let fixture: ComponentFixture<OcticonsCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
