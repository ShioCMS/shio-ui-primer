import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioDragAndDropPageComponent } from './shio-drag-and-drop-page.component';

describe('ShioDragAndDropPageComponent', () => {
  let component: ShioDragAndDropPageComponent;
  let fixture: ComponentFixture<ShioDragAndDropPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShioDragAndDropPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioDragAndDropPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
