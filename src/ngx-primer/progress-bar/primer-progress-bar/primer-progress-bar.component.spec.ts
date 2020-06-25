import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerProgressBarComponent } from './primer-progress-bar.component';

describe('PrimerProgressBarComponent', () => {
  let component: PrimerProgressBarComponent;
  let fixture: ComponentFixture<PrimerProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
