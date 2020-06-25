import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFlashComponent } from './primer-flash.component';

describe('PrimerFlashComponent', () => {
  let component: PrimerFlashComponent;
  let fixture: ComponentFixture<PrimerFlashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerFlashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
