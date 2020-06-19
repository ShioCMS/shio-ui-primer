import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeListComponent } from './post-type-list.component';

describe('PostTypeListComponent', () => {
  let component: PostTypeListComponent;
  let fixture: ComponentFixture<PostTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
