import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShObjectService } from 'src/app/service/object/object.service';
import { ShObjectData } from 'src/app/data/object/object.data';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit, OnDestroy {
  private shObject: ShObjectService;
  private shObjectList: Observable<ShObjectData>;
  constructor(shObject: ShObjectService, private route: ActivatedRoute, private router: Router) {
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

  }
  ngOnDestroy(): void {

  }
}
