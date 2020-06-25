import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTabNavLinkComponent } from './primer-tab-nav-link.component';

describe('PrimerTabNavLinkComponent', () => {
  let component: PrimerTabNavLinkComponent;
  let fixture: ComponentFixture<PrimerTabNavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTabNavLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTabNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
