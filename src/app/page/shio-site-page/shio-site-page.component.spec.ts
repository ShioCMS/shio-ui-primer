import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioSitePageComponent } from './shio-site-page.component';

describe('ShioSitePageComponent', () => {
  let component: ShioSitePageComponent;
  let fixture: ComponentFixture<ShioSitePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioSitePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioSitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
