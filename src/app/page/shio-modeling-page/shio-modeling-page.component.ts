import { Component, OnInit } from '@angular/core';
import { ShPostTypeData } from '@app/data/post/type/postType.data';
import { User } from '@app/_models';
import { Observable } from 'rxjs';
import { UserService } from '@app/_services';
import { ShPostTypeService } from '@app/service/postType/postType.service';

@Component({
  selector: 'app-shio-modeling-page',
  templateUrl: './shio-modeling-page.component.html'
})
export class ShioModelingPageComponent implements OnInit {

  postTypes: ShPostTypeData[];
  orderProp: string;
  loading = false;
  user: Observable<User>;
  constructor(private userService: UserService, private postTypeService: ShPostTypeService) {
    postTypeService.query().subscribe(postTypes => {
      this.postTypes = postTypes;
    });
    this.orderProp = 'name';
  
  }
  getPostTypes(): ShPostTypeData[] {
    return this.postTypes;
  }

  ngOnInit() {
    this.loading = true;
    this.user = this.userService.getAll();
  }


}
