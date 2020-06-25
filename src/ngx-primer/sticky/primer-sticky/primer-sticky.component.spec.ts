import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerStickyComponent } from './primer-sticky.component';

describe('PrimerStickyComponent', () => {
  let component: PrimerStickyComponent;
  let fixture: ComponentFixture<PrimerStickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerStickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
