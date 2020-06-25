import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerAvatarStackComponent } from './primer-avatar-stack.component';

describe('PrimerAvatarStackComponent', () => {
  let component: PrimerAvatarStackComponent;
  let fixture: ComponentFixture<PrimerAvatarStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerAvatarStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerAvatarStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
