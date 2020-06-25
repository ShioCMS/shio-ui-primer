import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerUnderlineNavLinkComponent } from './primer-underline-nav-link.component';

describe('PrimerUnderlineNavLinkComponent', () => {
  let component: PrimerUnderlineNavLinkComponent;
  let fixture: ComponentFixture<PrimerUnderlineNavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerUnderlineNavLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerUnderlineNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
