import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPointerBoxComponent } from './primer-pointer-box.component';

describe('PrimerPointerBoxComponent', () => {
  let component: PrimerPointerBoxComponent;
  let fixture: ComponentFixture<PrimerPointerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerPointerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerPointerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
