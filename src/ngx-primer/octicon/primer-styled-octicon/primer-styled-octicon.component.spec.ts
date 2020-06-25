import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerStyledOcticonComponent } from './primer-styled-octicon.component';

describe('PrimerStyledOcticonComponent', () => {
  let component: PrimerStyledOcticonComponent;
  let fixture: ComponentFixture<PrimerStyledOcticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerStyledOcticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerStyledOcticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
