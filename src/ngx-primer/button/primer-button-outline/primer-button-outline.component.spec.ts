import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerButtonOutlineComponent } from './primer-button-outline.component';

describe('PrimerButtonOutlineComponent', () => {
  let component: PrimerButtonOutlineComponent;
  let fixture: ComponentFixture<PrimerButtonOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerButtonOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerButtonOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
