import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerButtonDangerComponent } from './primer-button-danger.component';

describe('PrimerButtonDangerComponent', () => {
  let component: PrimerButtonDangerComponent;
  let fixture: ComponentFixture<PrimerButtonDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerButtonDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerButtonDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
