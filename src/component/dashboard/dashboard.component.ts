import { Component, OnInit } from '@angular/core';
import { ShSiteService } from 'src/service/site/site.service';
import { ShSiteData } from 'src/data/site/site.data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  sites: ShSiteData[];
  orderProp: string;

  constructor(site: ShSiteService) {
    site.query().subscribe(sites => {
      this.sites = sites;
    });
    this.orderProp = 'name';
  }
  getSites(): ShSiteData[] {
    return this.sites;
  }

  ngOnInit() {

  }

}