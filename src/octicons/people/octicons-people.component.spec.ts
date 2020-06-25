import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsPeopleComponent } from './octicons-people.component';

describe('OcticonsPeopleComponent', () => {
  let component: OcticonsPeopleComponent;
  let fixture: ComponentFixture<OcticonsPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
