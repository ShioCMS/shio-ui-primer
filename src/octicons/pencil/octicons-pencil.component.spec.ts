import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsPencilComponent } from './octicons-pencil.component';

describe('OcticonsPencilComponent', () => {
  let component: OcticonsPencilComponent;
  let fixture: ComponentFixture<OcticonsPencilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsPencilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsPencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
