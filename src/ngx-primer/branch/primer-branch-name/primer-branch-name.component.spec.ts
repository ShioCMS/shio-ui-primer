import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerBranchNameComponent } from './primer-branch-name.component';

describe('PrimerBranchNameComponent', () => {
  let component: PrimerBranchNameComponent;
  let fixture: ComponentFixture<PrimerBranchNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerBranchNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerBranchNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
