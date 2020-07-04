import { Component, OnInit } from '@angular/core';
import { ShPostTypeService } from '@app/service/postType/postType.service';
import { ShPostTypeData } from '@app/data/post/type/postType.data';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shio-post-type-page',
  templateUrl: './shio-post-type-page.component.html'
})
export class ShioPostTypePageComponent implements OnInit {
  private shPostTypeData: Observable<ShPostTypeData>
  private id: string;

  constructor(private shPostTypeService: ShPostTypeService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.shPostTypeData = this.shPostTypeService.get(this.id);

  }

  getShPostType(): Observable<ShPostTypeData> {
    return this.shPostTypeData;
  }

  ngOnInit(): void {

  }


}
