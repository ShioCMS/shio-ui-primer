import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerBoxComponent } from './primer-box.component';

describe('PrimerBoxComponent', () => {
  let component: PrimerBoxComponent;
  let fixture: ComponentFixture<PrimerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
