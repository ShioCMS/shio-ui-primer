import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSideNavComponent } from './primer-side-nav.component';

describe('PrimerSideNavComponent', () => {
  let component: PrimerSideNavComponent;
  let fixture: ComponentFixture<PrimerSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
