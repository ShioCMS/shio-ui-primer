import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObjectListComponent } from './object-list/object-list.component';
import { PostTypeListComponent } from './post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from './api-playground/api-playground.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { Site } from './core/site/site.service';
import { ShObject } from './core/shObject/shObject.service';
import { PostComponent } from './post/post.component';
import { ShPost } from './core/shPost/shPost.service';
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
    Site, ShObject, ShPost
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
