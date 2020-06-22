import { Component, OnInit } from '@angular/core';
import { ShSiteData } from 'src/app/data/site/site.data';
import { ShSiteService } from 'src/app/service/site/site.service';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  sites: ShSiteData[];
  orderProp: string;
  loading = false;
  users: User[];
  constructor(private userService: UserService, site: ShSiteService) {
    site.query().subscribe(sites => {
      this.sites = sites;
    });
    this.orderProp = 'name';
  }
  getSites(): ShSiteData[] {
    return this.sites;
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

}