import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShioRepositoryAboutComponent } from './component/shio-repository-about/shio-repository-about.component';
import { ShioRepositoryListComponent } from './component/shio-repository-list/shio-repository-list.component';
import { ShioRepositoryTabsComponent } from './component/shio-repository-tabs/shio-repository-tabs.component';
import { ShSiteService } from './service/site/site.service';
import { ShioSitePageComponent } from './component/shio-site-page/shio-site-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AceModule, AceConfigInterface, ACE_CONFIG } from 'ngx-ace-wrapper';
import { ShioRepositoryRoutingModule } from './shio-repository-routing.module';
import { ShioCommonsModule } from 'src/commons/shio-commons.module';
import { OcticonsModule } from 'ngx-octicons';
import { ShHistoryService } from 'src/history/service/history.service';
const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  tabSize: 2
};
@NgModule({
  declarations: [
    ShioRepositoryAboutComponent,
    ShioRepositoryListComponent,
    ShioRepositoryTabsComponent,
    ShioSitePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AceModule,
    OcticonsModule,    
    ShioRepositoryRoutingModule,
    ShioCommonsModule
  ],
  exports: [
    ShioRepositoryAboutComponent,
    ShioRepositoryListComponent,
    ShioRepositoryTabsComponent
  ],
  providers: [
    ShSiteService,
    ShHistoryService,
    { provide: ACE_CONFIG, useValue: DEFAULT_ACE_CONFIG }
  ]
})
export class ShioRepositoryModule { }
