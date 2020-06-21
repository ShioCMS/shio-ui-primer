import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShioObjectListComponent } from './shio-object-list.component';;
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ShObjectService } from 'src/app/service/object/object.service';


describe('ShioObjectListComponent', () => {
  let component: ShioObjectListComponent;
  let fixture: ComponentFixture<ShioObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShioObjectListComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [ShObjectService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShioObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
