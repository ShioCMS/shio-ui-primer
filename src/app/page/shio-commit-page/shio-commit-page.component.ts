import { Component, OnInit } from '@angular/core';
import { ShSiteService } from '@app/service/site/site.service';
import { ActivatedRoute } from '@angular/router';
import { ShSiteData } from '@app/data/site/site.data';
import { Observable } from 'rxjs';
import { ShHistoryService } from '@app/service/history/history.service';
import { ShHistoryData } from '@app/data/history/history.data';

@Component({
  selector: 'app-shio-commit-page',
  templateUrl: './shio-commit-page.component.html'
})
export class ShioCommitPageComponent implements OnInit {
  private shSite: Observable<ShSiteData>;
  private shHistories: Observable<ShHistoryData[]>;
  today: Date = new Date();
  historyGroupBy: any;
  constructor(private shSiteService: ShSiteService, private shHistoryService: ShHistoryService, private route: ActivatedRoute,) {
    let id = this.route.snapshot.paramMap.get('id');
    this.shSite = this.shSiteService.get(id);
    this.shHistories = this.shHistoryService.findBySite(id, 0);
    this.shHistories.subscribe(histories => {
      histories.map(history => {
        let date = new Date(history.date);
        date.setHours(0, 0, 0, 0);
        history.day = new Date(date.toString());
      })
      this.historyGroupBy = this.groupBy(histories, 'day');
      console.log(this.historyGroupBy);
    })

  }

  ngOnInit(): void {
  }
  getShSite(): Observable<ShSiteData> {

    return this.shSite;
  }
  getShHistories(): Observable<ShHistoryData[]> {

    return this.shHistories;
  }

  groupBy(xs: any, key: string) {
    let reduce = xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
    let list = [];
    Object.entries(reduce).forEach((key) => {
      let groupByDay: any = {};
      groupByDay.day = new Date(key[0]);
      groupByDay.histories = key[1];
      list.push(groupByDay);
    });
    return list;
  }
}
