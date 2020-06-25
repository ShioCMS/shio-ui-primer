import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerAvatarPair } from './primer-avatar-pair.component';

describe('PrimerAvatarPair', () => {
  let component: PrimerAvatarPair;
  let fixture: ComponentFixture<PrimerAvatarPair>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerAvatarPair ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerAvatarPair);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
