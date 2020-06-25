import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerUnderlineNavComponent } from './primer-underline-nav.component';

describe('PrimerUnderlineNavComponent', () => {
  let component: PrimerUnderlineNavComponent;
  let fixture: ComponentFixture<PrimerUnderlineNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerUnderlineNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerUnderlineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
