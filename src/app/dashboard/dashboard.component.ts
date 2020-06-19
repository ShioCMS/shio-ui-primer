import { Component, OnInit } from '@angular/core';
import { SiteData, Site } from '../core/site/site.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  sites: SiteData[];
  orderProp: string;

  constructor(site: Site) {
    site.query().subscribe(sites => {
      this.sites = sites;
    });
    this.orderProp = 'name';
  }
  getSites(): SiteData[] {
    return this.sites;
  }

  ngOnInit() {

  }

}