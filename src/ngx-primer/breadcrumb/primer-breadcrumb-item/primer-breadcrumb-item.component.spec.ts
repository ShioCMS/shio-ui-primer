import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerBreadcrumbItemComponent } from './primer-breadcrumb-item.component';

describe('PrimerBreadcrumbItemComponent', () => {
  let component: PrimerBreadcrumbItemComponent;
  let fixture: ComponentFixture<PrimerBreadcrumbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerBreadcrumbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerBreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
