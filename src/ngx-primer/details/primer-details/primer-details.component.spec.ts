import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDetailsComponent } from './primer-details.component';

describe('PrimerDetailsComponent', () => {
  let component: PrimerDetailsComponent;
  let fixture: ComponentFixture<PrimerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
