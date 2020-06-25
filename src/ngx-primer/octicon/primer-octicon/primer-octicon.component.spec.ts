import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerOcticonComponent } from './primer-octicon.component';

describe('PrimerOcticonComponent', () => {
  let component: PrimerOcticonComponent;
  let fixture: ComponentFixture<PrimerOcticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerOcticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerOcticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
