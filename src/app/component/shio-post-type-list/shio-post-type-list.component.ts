import { Component, OnInit, Input } from '@angular/core';
import { ShPostTypeData } from '@app/data/post/type/postType.data';

@Component({
  selector: 'shio-post-type-list',
  templateUrl: './shio-post-type-list.component.html'
})
export class ShioPostTypeListComponent implements OnInit {
  @Input() shPostTypes: ShPostTypeData[];
  constructor() { }

  ngOnInit(): void {
  }

}
