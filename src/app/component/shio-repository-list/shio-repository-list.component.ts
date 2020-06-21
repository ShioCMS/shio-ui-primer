import { Component, OnInit, Input } from '@angular/core';
import { ShSiteData } from '../../data/site/site.data';

@Component({
  selector: 'shio-repository-list',
  templateUrl: './shio-repository-list.component.html',
  styleUrls: ['./shio-repository-list.component.scss']
})
export class ShioRepositoryListComponent implements OnInit {
  @Input() shSites: ShSiteData[];
  constructor() { }

  ngOnInit(): void {
  }

}
