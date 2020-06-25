import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTruncateComponent } from './primer-truncate.component';

describe('PrimerTruncateComponent', () => {
  let component: PrimerTruncateComponent;
  let fixture: ComponentFixture<PrimerTruncateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTruncateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTruncateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
