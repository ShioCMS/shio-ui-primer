import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShObjectData, ShObject, ShPostData, ShFolderData, BreadcrumbData } from '../core/shObject/shObject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteData } from '../core/site/site.service';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit, OnDestroy {
  shObject: ShObject;
  shObjectList: ShObjectData;
  orderProp: string;
  objectId: string;
  constructor(shObject: ShObject, private route: ActivatedRoute, private router: Router) {
    this.shObject = shObject;
    this.orderProp = 'name';
    let id = this.route.snapshot.paramMap.get('id');
    this.shObject.get(id).subscribe(shObjectList => {
      this.shObjectList = shObjectList;
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }
  getShObjectList(): ShObjectData {

    return this.shObjectList;
  }

  getShFolders(): ShFolderData[] {
    if (this.shObjectList !== null && (typeof this.shObjectList !== undefined)) {
      if (this.shObjectList.shFolders != null && (typeof this.shObjectList.shFolders !== undefined) && this.shObjectList.shFolders.length > 0){
        return this.shObjectList.shFolders;
      }else
        return [];
    }
    return [];
  }

  getShPosts(): ShPostData[] {
    if (this.shObjectList !== null && (typeof this.shObjectList !== undefined) && this.shObjectList.shPosts !== null && (typeof this.shObjectList.shPosts !== undefined) && this.shObjectList.shPosts.length > 0)
      return this.shObjectList.shPosts;
    else
      return [];
  }

  getShSite(): SiteData {
    return this.shObjectList.shSite;
  }

  getBreadcrumb(): BreadcrumbData[] {
    return this.shObjectList.breadcrumb;
  }
  ngOnInit() {
    
  }
  ngOnDestroy(): void {
  
  }
}
