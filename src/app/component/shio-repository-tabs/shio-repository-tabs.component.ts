import { Component, OnInit, Input } from '@angular/core';
import { ShSiteData } from '@app/data/site/site.data';

@Component({
  selector: 'shio-repository-tabs',
  templateUrl: './shio-repository-tabs.component.html'
})
export class ShioRepositoryTabsComponent implements OnInit {
  @Input() shSite: ShSiteData;
  @Input() tabIndex: number;
  constructor() { }

  ngOnInit(): void {
  }

}
