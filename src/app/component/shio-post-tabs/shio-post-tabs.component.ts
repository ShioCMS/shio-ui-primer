import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbData } from '@app/data/folder/breadcrumb.data';
import { Observable } from 'rxjs';
import { ShPostService } from '@app/service/post/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShPostData } from '@app/data/post/post.data';

@Component({
  selector: 'shio-post-tabs',
  templateUrl: './shio-post-tabs.component.html',
  styleUrls: ['./shio-post-tabs.component.scss']
})
export class ShioPostTabsComponent implements OnInit {
  @Input() shPost: ShPostData;
  private breacrumbData: Observable<BreadcrumbData>;
  private id: string;
  tabs: any[] = [];
  constructor(private shPostService: ShPostService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.breacrumbData = this.shPostService.getBreadcrumb(this.id);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  getBreadcrumb(): Observable<BreadcrumbData> {
    return this.breacrumbData;
  }
  ngOnInit(): void {
    this.shPost.shPostAttrs.forEach((shPostAttr, index) => {
      let tabName = this.shPost.shPostType.title;
      if (shPostAttr.shPostTypeAttr.shWidget.name === 'Tab') {
        tabName = shPostAttr.shPostTypeAttr.label;
        this.tabs.push({
          ordinal: shPostAttr.shPostTypeAttr.ordinal,
          name: shPostAttr.shPostTypeAttr.label
        });
      } else if (index === 0) {
        this.tabs.push({
          ordinal: 0,
          name: tabName
        });
      }
      shPostAttr.tab = tabName;
    });
  }
}
