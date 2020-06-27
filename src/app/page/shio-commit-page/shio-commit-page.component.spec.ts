import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioCommitPageComponent } from './shio-commit-page.component';

describe('ShioCommitPageComponent', () => {
  let component: ShioCommitPageComponent;
  let fixture: ComponentFixture<ShioCommitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioCommitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioCommitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
