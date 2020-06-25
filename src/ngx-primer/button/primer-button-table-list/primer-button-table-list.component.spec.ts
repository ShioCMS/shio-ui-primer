import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerButtonTableListComponent } from './primer-button-table-list.component';

describe('PrimerButtonTableListComponent', () => {
  let component: PrimerButtonTableListComponent;
  let fixture: ComponentFixture<PrimerButtonTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerButtonTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerButtonTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
