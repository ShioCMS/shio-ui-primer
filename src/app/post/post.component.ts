import { Component, OnInit } from '@angular/core';
import { ShPost, ShPostData, ShPostXPData } from '../core/shPost/shPost.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbData } from '../core/shObject/shObject.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private breacrumbData: Observable<BreadcrumbData>;
  private shPost: ShPost;
  private shPostData: Observable<ShPostXPData>
  private id: string;
  constructor(shPost: ShPost, private route: ActivatedRoute, private router: Router) {
    this.shPost = shPost;
    this.id = this.route.snapshot.paramMap.get('id');
    this.shPostData = this.shPost.get(this.id);
    this.breacrumbData = this.shPost.getBreadcrumb(this.id);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  getShPost(): Observable<ShPostXPData> {
    return this.shPostData;
  }
  getBreadcrumb(): Observable<BreadcrumbData> {
    return this.breacrumbData;
  }
  ngOnInit(): void {
  }

}
