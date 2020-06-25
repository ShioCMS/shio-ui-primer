import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsRepositoryComponent } from './octicons-repository.component';

describe('OcticonsRepositoryComponent', () => {
  let component: OcticonsRepositoryComponent;
  let fixture: ComponentFixture<OcticonsRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
