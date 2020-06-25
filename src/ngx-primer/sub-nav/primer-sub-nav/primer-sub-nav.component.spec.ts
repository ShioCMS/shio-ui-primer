import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSubNavComponent } from './primer-sub-nav.component';

describe('PrimerSubNavComponent', () => {
  let component: PrimerSubNavComponent;
  let fixture: ComponentFixture<PrimerSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
