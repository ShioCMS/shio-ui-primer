import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerBorderBoxComponent } from './primer-border-box.component';

describe('PrimerBorderBoxComponent', () => {
  let component: PrimerBorderBoxComponent;
  let fixture: ComponentFixture<PrimerBorderBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerBorderBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerBorderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
