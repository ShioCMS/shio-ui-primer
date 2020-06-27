import { Component, OnInit, Input } from '@angular/core';
import { ShSiteData } from '@app/data/site/site.data';
import { ShHistoryService } from '@app/service/history/history.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'shio-repository-tabs',
  templateUrl: './shio-repository-tabs.component.html'
})
export class ShioRepositoryTabsComponent implements OnInit {
  @Input() shSite: ShSiteData;
  @Input() tabIndex: number;
  private commitCount: Observable<number>;
  constructor(private shHistoryService: ShHistoryService) {
    
   }

  ngOnInit(): void {
    this.commitCount = this.shHistoryService.countBySite(this.shSite.id);
  }

  getCommitCount(): Observable<number> {
    return this.commitCount;
  }

}
