import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerBreadcrumbComponent } from './primer-breadcrumb.component';

describe('PrimerBreadcrumbComponent', () => {
  let component: PrimerBreadcrumbComponent;
  let fixture: ComponentFixture<PrimerBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
