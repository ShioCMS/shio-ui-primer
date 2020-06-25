import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerButtonComponent } from './primer-button.component';

describe('PrimerButtonComponent', () => {
  let component: PrimerButtonComponent;
  let fixture: ComponentFixture<PrimerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
