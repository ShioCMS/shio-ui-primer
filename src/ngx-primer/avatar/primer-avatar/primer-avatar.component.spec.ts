import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerAvatar } from './primer-avatar.component';

describe('PrimerAvatar', () => {
  let component: PrimerAvatar;
  let fixture: ComponentFixture<PrimerAvatar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerAvatar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
