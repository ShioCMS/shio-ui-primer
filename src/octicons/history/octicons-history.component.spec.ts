import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsHistoryComponent } from './octicons-history.component';

describe('OcticonsHistoryComponent', () => {
  let component: OcticonsHistoryComponent;
  let fixture: ComponentFixture<OcticonsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
