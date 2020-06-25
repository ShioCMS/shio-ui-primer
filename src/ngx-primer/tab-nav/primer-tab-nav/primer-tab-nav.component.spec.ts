import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTabNavComponent } from './primer-tab-nav.component';

describe('PrimerTabNavComponent', () => {
  let component: PrimerTabNavComponent;
  let fixture: ComponentFixture<PrimerTabNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTabNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
