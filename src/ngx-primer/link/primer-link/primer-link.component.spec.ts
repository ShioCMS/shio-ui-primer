import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerLinkComponent } from './primer-link.component';

describe('PrimerLinkComponent', () => {
  let component: PrimerLinkComponent;
  let fixture: ComponentFixture<PrimerLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
