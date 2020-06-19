import { Component, OnInit } from '@angular/core';
import { ShPost, ShPostData, ShPostXPData } from '../core/shPost/shPost.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private shPost: ShPost;
  private shPostXP: ShPostXPData;
  constructor(shPost: ShPost, private route: ActivatedRoute, private router: Router) {
    this.shPost = shPost;
    let id = this.route.snapshot.paramMap.get('id');
    this.shPost.get(id).subscribe(shPostXP => {
      this.shPostXP = shPostXP;
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  getShPost(): ShPostData {
    return this.shPostXP.shPost;
  }
  ngOnInit(): void {
  }

}
