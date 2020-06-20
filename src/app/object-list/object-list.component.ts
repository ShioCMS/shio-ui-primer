import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShObjectData, ShObject, ShFolderData, BreadcrumbData } from '../core/shObject/shObject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteData } from '../core/site/site.service';
import { ShPostData } from '../core/shPost/shPost.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit, OnDestroy {
  private shObject: ShObject;
  private shObjectList: Observable<ShObjectData>;
  constructor(shObject: ShObject, private route: ActivatedRoute, private router: Router) {
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
