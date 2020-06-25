import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsRepository } from './octicons-repository.component';

describe('OcticonsRepository', () => {
  let component: OcticonsRepository;
  let fixture: ComponentFixture<OcticonsRepository>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsRepository ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsRepository);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
