import { Component, OnInit } from '@angular/core';
import { ShSiteData } from 'src/app/data/site/site.data';
import { ShSiteService } from 'src/app/service/site/site.service';
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