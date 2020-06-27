import { Component, OnInit } from '@angular/core';
import { ShSiteService } from '@app/service/site/site.service';
import { ActivatedRoute } from '@angular/router';
import { ShSiteData } from '@app/data/site/site.data';
import { Observable } from 'rxjs';
import { ShHistoryService } from '@app/service/history/history.service';
import { ShHistoryData } from '@app/data/history/object.data';

@Component({
  selector: 'app-shio-commit-page',
  templateUrl: './shio-commit-page.component.html'
})
export class ShioCommitPageComponent implements OnInit {
  private shSite: Observable<ShSiteData>;
  private shHistories: Observable<ShHistoryData[]>;
  today: Date = new Date();
  constructor(private shSiteService: ShSiteService, private shHistoryService: ShHistoryService, private route: ActivatedRoute,) {
    let id = this.route.snapshot.paramMap.get('id');
    this.shSite = this.shSiteService.get(id);
    this.shHistories = this.shHistoryService.findBySite(id, 0);
  }

  ngOnInit(): void {
  }
  getShSite(): Observable<ShSiteData> {

    return this.shSite;
  }
  getShHistories(): Observable<ShHistoryData[]> {

    return this.shHistories;
  }
}
