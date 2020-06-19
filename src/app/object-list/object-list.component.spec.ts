import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectListComponent } from './object-list.component';
import { ShObject } from '../core/shObject/shObject.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('ObjectListComponent', () => {
  let component: ObjectListComponent;
  let fixture: ComponentFixture<ObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectListComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [ShObject]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
