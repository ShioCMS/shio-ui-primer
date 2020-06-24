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
import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './page/login';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShioLogoComponent } from './component/shio-logo/shio-logo.component';
import { ShioHeaderComponent } from './component/shio-header/shio-header.component';
import { ShioContentPageComponent } from './page/shio-content-page/shio-content-page.component';
import { ShioRepositoryTabsComponent } from './component/shio-repository-tabs/shio-repository-tabs.component';
import { OcticonsPlusComponent } from './component/octicons/plus/octicons-plus.component';
import { ShioSitePageComponent } from './page/shio-site-page/shio-site-page.component';
import { ShioPostSettingsPageComponent } from './page/shio-post-settings-page/shio-post-settings-page.component';
import { ShioPostTabsComponent } from './component/shio-post-tabs/shio-post-tabs.component';
import { AceModule, AceConfigInterface, ACE_CONFIG } from 'ngx-ace-wrapper';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  tabSize: 2
};
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
    LoginComponent,
    ShioLogoComponent,
    ShioHeaderComponent,
    ShioContentPageComponent,
    ShioRepositoryTabsComponent,
    OcticonsPlusComponent,
    ShioSitePageComponent,
    ShioPostSettingsPageComponent,
    ShioPostTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    ReactiveFormsModule,
    FormsModule,
    AceModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ACE_CONFIG, useValue: DEFAULT_ACE_CONFIG },
    ShSiteService, ShObjectService, ShPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
