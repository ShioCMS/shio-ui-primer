import { Component, OnInit, Input } from '@angular/core';
import { ShSiteData } from '@app/data/site/site.data';
import { __importDefault } from 'tslib';

@Component({
  selector: 'shio-repository-tabs',
  templateUrl: './shio-repository-tabs.component.html',
  styleUrls: ['./shio-repository-tabs.component.scss']
})
export class ShioRepositoryTabsComponent implements OnInit {
  @Input() shSite: ShSiteData;
  @Input() tabIndex: number;
  constructor() { }

  ngOnInit(): void {
  }

}
