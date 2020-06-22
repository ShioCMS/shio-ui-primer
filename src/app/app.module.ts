import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
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
import { ShioRepositoryListComponent } from './component/shio-repository-list/shio-repository-list.component';
import { ShioPostTypeReportComponent } from './component/shio-post-type-report/shio-post-type-report.component';
import { ShioRepositoryAboutComponent } from './component/shio-repository-about/shio-repository-about.component';
import { ShioBoxListComponent } from './component/shio-box-list/shio-box-list.component';
import { ShioObjectListComponent } from './page/shio-object-list/shio-object-list.component';
import { AppComponent } from './page/app/app.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PostTypeListComponent } from './page/post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from './page/api-playground/api-playground.component';
import { PostComponent } from './page/post/post.component';
import localeEn from '@angular/common/locales/en';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { LoginComponent } from './page/login';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeEn, 'en');
registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShioObjectListComponent,
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
    ShioBoxListComponent,
    ShioRepositoryAboutComponent,
    ShioPostTypeReportComponent,
    ShioRepositoryListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider, ShSiteService, ShObjectService, ShPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
