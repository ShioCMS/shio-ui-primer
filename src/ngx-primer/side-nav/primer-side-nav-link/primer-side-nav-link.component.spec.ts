import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSideNavLinkComponent } from './primer-side-nav-link.component';

describe('PrimerSideNavLinkComponent', () => {
  let component: PrimerSideNavLinkComponent;
  let fixture: ComponentFixture<PrimerSideNavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSideNavLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSideNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
