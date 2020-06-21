import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcticonsWorkflowComponent } from './octicons-workflow.component';

describe('OcticonsWorkflowComponent', () => {
  let component: OcticonsWorkflowComponent;
  let fixture: ComponentFixture<OcticonsWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcticonsWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcticonsWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
