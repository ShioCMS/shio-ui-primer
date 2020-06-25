import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSubNavLinkComponent } from './primer-sub-nav-link.component';

describe('PrimerSubNavLinkComponent', () => {
  let component: PrimerSubNavLinkComponent;
  let fixture: ComponentFixture<PrimerSubNavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSubNavLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSubNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
