import { Component, OnInit } from '@angular/core';
import { ShSiteData } from '@app/data/site/site.data';
import { Observable } from 'rxjs';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { ShSiteService } from '@app/service/site/site.service';

@Component({
  selector: 'app-shio-repository-page',
  templateUrl: './shio-repository-page.component.html'
})
export class ShioRepositoryPageComponent implements OnInit {

  sites: ShSiteData[];
  orderProp: string;
  loading = false;
  user: Observable<User>;
  constructor(private userService: UserService, siteService: ShSiteService) {
    siteService.query().subscribe(sites => {
      this.sites = sites;
    });
    this.orderProp = 'name';
  }
  getSites(): ShSiteData[] {
    return this.sites;
  }

  ngOnInit() {
    this.loading = true;
    this.user = this.userService.getAll();
  }
}
