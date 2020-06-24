import 'brace';
import 'brace/theme/eclipse';
import 'brace/mode/json';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShSiteService } from '@app/service/site/site.service';
import { ShSiteData } from '@app/data/site/site.data';
import { AceConfigInterface } from 'ngx-ace-wrapper';

@Component({
  selector: 'app-shio-site-page',
  templateUrl: './shio-site-page.component.html',
  styleUrls: ['./shio-site-page.component.scss']
})
export class ShioSitePageComponent implements OnInit {
  public aceConfig: AceConfigInterface = {
    showGutter: true,
    theme: 'eclipse',
    readOnly: false
  };
  
  private shSite: Observable<ShSiteData>;
  constructor(private shSiteService: ShSiteService, private route: ActivatedRoute, private router: Router) {
    let id = this.route.snapshot.paramMap.get('id');
    this.shSite = this.shSiteService.get(id);
  }

  getShSite(): Observable<ShSiteData> {

    return this.shSite;
  }

  ngOnInit(): void {
  }

  public saveSite(_shSite: ShSiteData) {
    this.shSiteService.save(_shSite);
  }
}
