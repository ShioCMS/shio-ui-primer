import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbData } from '@app/data/folder/breadcrumb.data';
import { Observable } from 'rxjs';
import { ShPostService } from '@app/service/post/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShPostData } from '@app/data/post/post.data';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'shio-post-tabs',
  templateUrl: './shio-post-tabs.component.html'
})
export class ShioPostTabsComponent implements OnInit {
  @Input() shPost: ShPostData;
  public currentTab: number = 0;
  private breacrumbData: Observable<BreadcrumbData>;
  private id: string;
  tabs: any[] = [];
  constructor(private readonly notifier: NotifierService, private shPostService: ShPostService, private route: ActivatedRoute, private router: Router) {
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
    this.formatPost(this.shPost);
  }
  private formatPost(shPost: ShPostData) {
    this.tabs = [];
    let currentTabIndex: number = 0;
    shPost.shPostAttrs.sort((a, b) => a.shPostTypeAttr.ordinal - b.shPostTypeAttr.ordinal).forEach((shPostAttr, index) => {
      let tabName = this.shPost.shPostType.title;
      if (shPostAttr.shPostTypeAttr.shWidget.name === 'Tab') {
        tabName = shPostAttr.shPostTypeAttr.label;
        currentTabIndex = index;
        this.tabs.push({
          ordinal: index,
          name: shPostAttr.shPostTypeAttr.label
        });
      } else if (index === 0) {
        this.tabs.push({
          ordinal: index,
          name: tabName
        });
      }
      shPostAttr.tab = currentTabIndex;
    });
  }
  public savePost() {
    this.shPostService.savePost(this.shPost).subscribe(
      (shPost: ShPostData) => {
        this.shPost = shPost;
        this.formatPost(this.shPost);
        this.notifier.notify("success", shPost.title.concat(" Post was updated."));
      },
      response => {
        this.notifier.notify("error", "Repository settings was error: " + response);
      },
      () => {
        // The POST observable is now completed
      });
  }
}
