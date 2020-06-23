import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbData } from 'src/app/data/folder/breadcrumb.data';
import { ShPostService } from 'src/app/service/post/post.service';
import { ShPostXPData } from 'src/app/data/post/postxp.data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private breacrumbData: Observable<BreadcrumbData>;
  private shPost: ShPostService;
  private shPostData: Observable<ShPostXPData>
  private id: string;
  constructor(shPost: ShPostService, private route: ActivatedRoute, private router: Router) {
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
