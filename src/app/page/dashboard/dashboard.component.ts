import { Component, OnInit } from '@angular/core';
import { ShSiteData } from 'src/app/data/site/site.data';
import { ShSiteService } from 'src/app/service/site/site.service';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  sites: ShSiteData[];
  orderProp: string;
  loading = false;
  user: Observable<User>;
  constructor(private userService: UserService, private site: ShSiteService, private router: Router) {
    
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
    this.user = this.userService.getAll();
  }
  getRouter() : Router {
    return this.router;
  }
}