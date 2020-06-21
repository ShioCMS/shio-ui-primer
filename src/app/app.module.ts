import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ObjectListComponent } from './component/object-list/object-list.component';
import { PostTypeListComponent } from './component/post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from './component/api-playground/api-playground.component';
import { PostComponent } from './component/post/post.component';
import { ShSiteService } from './service/site/site.service';
import { ShObjectService } from './service/object/object.service';
import { ShPostService } from './service/post/post.service';
import { OcticonsRepositoryComponent } from './component/octicons/repository/octicons-repository.component';
import { OcticonsPencilComponent } from './component/octicons/pencil/octicons-pencil.component';
import { OcticonsGearComponent } from './component/octicons/gear/octicons-gear.component';
import { OcticonsCopyComponent } from './component/octicons/copy/octicons-copy.component';
import { OcticonsFileDirectoryComponent } from './component/octicons/file-directory/octicons-file-directory.component';
import { OcticonsNoteComponent } from './component/octicons/note/octicons-note.component';
import { OcticonsWorkflowComponent } from './component/octicons/workflow/octicons-workflow.component';
import { OcticonsPackageComponent } from './component/octicons/package/octicons-package.component';
import { OcticonsUploadComponent } from './component/octicons/upload/octicons-upload.component';
import { OcticonsPeopleComponent } from './component/octicons/people/octicons-people.component';
import { OcticonsHistoryComponent } from './component/octicons/history/octicons-history.component';
import { OcticonsEyeComponent } from './component/octicons/eye/octicons-eye.component';
import { OcticonsDownloadComponent } from './component/octicons/download/octicons-download.component';
import { OcticonsCodeComponent } from './component/octicons/code/octicons-code.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ObjectListComponent,
    PostTypeListComponent,
    ApiPlaygroundComponent,
    PostComponent,
    OcticonsRepositoryComponent,
    OcticonsPencilComponent,
    OcticonsGearComponent,
    OcticonsCopyComponent,
    OcticonsFileDirectoryComponent,
    OcticonsNoteComponent,
    OcticonsWorkflowComponent,
    OcticonsPackageComponent,
    OcticonsCodeComponent,
    OcticonsUploadComponent,
    OcticonsPeopleComponent,
    OcticonsHistoryComponent,
    OcticonsEyeComponent,
    OcticonsDownloadComponent,

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
