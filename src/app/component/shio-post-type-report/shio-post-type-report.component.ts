import { Component, OnInit, Input } from '@angular/core';
import { ShSiteService } from 'src/app/service/site/site.service';
import { ShPostTypeReportData } from 'src/app/data/post/type/postTypeReport.data';
import { Observable } from 'rxjs';
import { ShSiteData } from 'src/app/data/site/site.data';

@Component({
  selector: 'shio-post-type-report',
  templateUrl: './shio-post-type-report.component.html'
})
export class ShioPostTypeReportComponent implements OnInit {
  @Input() shSite: ShSiteData;
  private shSiteService: ShSiteService;
  private postTypeReport: Observable<ShPostTypeReportData[]>;

  constructor(shSiteService: ShSiteService) {
    this.shSiteService = shSiteService;
  }

  getShPostTypeReport(): Observable<ShPostTypeReportData[]> {

    return this.postTypeReport;
  }

  ngOnInit(): void {
    this.postTypeReport = this.shSiteService.countPostType(this.shSite.id);
  }

}
