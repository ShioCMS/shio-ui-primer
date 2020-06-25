import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerCircleOcticonComponent } from './primer-circle-octicon.component';

describe('PrimerCircleOcticonComponent', () => {
  let component: PrimerCircleOcticonComponent;
  let fixture: ComponentFixture<PrimerCircleOcticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerCircleOcticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerCircleOcticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
