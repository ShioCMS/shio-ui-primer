import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShObjectService } from 'src/app/service/object/object.service';
import { ShObjectData } from 'src/app/data/object/object.data';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'shio-object-list',
  templateUrl: './shio-object-list.component.html',
  styleUrls: ['./shio-object-list.component.scss']
})
export class ShioObjectListComponent implements OnInit, OnDestroy {
  private shObject: ShObjectService;
  private shObjectList: Observable<ShObjectData>;
  loading = false;
  users: User[];
  constructor(private userService: UserService, shObject: ShObjectService, private route: ActivatedRoute, private router: Router) {
    this.shObject = shObject;
    let id = this.route.snapshot.paramMap.get('id');
    this.shObjectList = this.shObject.get(id);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  getShObjectList(): Observable<ShObjectData> {

    return this.shObjectList;
  }
  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }
  ngOnDestroy(): void {

  }
}
