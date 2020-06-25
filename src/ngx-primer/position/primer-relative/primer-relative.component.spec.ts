import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerRelativeComponent } from './primer-relative.component';

describe('PrimerRelativeComponent', () => {
  let component: PrimerRelativeComponent;
  let fixture: ComponentFixture<PrimerRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
