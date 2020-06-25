import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSubNavLinksComponent } from './primer-sub-nav-links.component';

describe('PrimerSubNavLinksComponent', () => {
  let component: PrimerSubNavLinksComponent;
  let fixture: ComponentFixture<PrimerSubNavLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSubNavLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSubNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
