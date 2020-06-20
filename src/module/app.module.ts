import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { DashboardComponent } from 'src/component/dashboard/dashboard.component';
import { ObjectListComponent } from 'src/component/object-list/object-list.component';
import { PostTypeListComponent } from 'src/component/post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from 'src/component/api-playground/api-playground.component';
import { PostComponent } from 'src/component/post/post.component';
import { ShSiteService } from 'src/service/site/site.service';
import { ShObjectService } from 'src/service/object/object.service';
import { ShPostService } from 'src/service/post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ObjectListComponent,
    PostTypeListComponent,
    ApiPlaygroundComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [
    ShSiteService, ShObjectService, ShPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
