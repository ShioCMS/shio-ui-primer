import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerGridComponent } from './primer-grid.component';

describe('PrimerGridComponent', () => {
  let component: PrimerGridComponent;
  let fixture: ComponentFixture<PrimerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
