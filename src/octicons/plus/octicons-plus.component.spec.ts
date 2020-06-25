import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsPlusComponent } from './octicons-plus.component';

describe('OcticonsPlusComponent', () => {
  let component: OcticonsPlusComponent;
  let fixture: ComponentFixture<OcticonsPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
