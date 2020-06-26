import { Component, OnInit, Input } from '@angular/core';
import { ShSiteData } from '../../data/site/site.data';

@Component({
  selector: 'shio-repository-about',
  templateUrl: './shio-repository-about.component.html'
})
export class ShioRepositoryAboutComponent implements OnInit {
  @Input() shSite: ShSiteData;
  constructor() { }

  ngOnInit(): void {
  }

}
