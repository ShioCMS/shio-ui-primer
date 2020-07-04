import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { ShSiteService } from './service/site/site.service';
import { ShObjectService } from './service/object/object.service';
import { ShPostService } from './service/post/post.service';
import { ShioRepositoryListComponent } from './component/shio-repository-list/shio-repository-list.component';
import { ShioPostTypeReportComponent } from './component/shio-post-type-report/shio-post-type-report.component';
import { ShioRepositoryAboutComponent } from './component/shio-repository-about/shio-repository-about.component';
import { ShioBoxListComponent } from './component/shio-box-list/shio-box-list.component';
import { ShioObjectListComponent } from './page/shio-object-list/shio-object-list.component';
import { AppComponent } from './page/app/app.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
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
import { ShioSitePageComponent } from './page/shio-site-page/shio-site-page.component';
import { ShioPostSettingsPageComponent } from './page/shio-post-settings-page/shio-post-settings-page.component';
import { ShioPostTabsComponent } from './component/shio-post-tabs/shio-post-tabs.component';
import { AceModule, AceConfigInterface, ACE_CONFIG } from 'ngx-ace-wrapper';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ShioPostTabComponent } from './component/shio-post-tab/shio-post-tab.component';
import { OcticonsRepository, OcticonsPencil, OcticonsGear, OcticonsFileDirectory, OcticonsNote, OcticonsWorkflow, OcticonsPackage, OcticonsCode, OcticonsPeople, OcticonsHistory, OcticonsEye, OcticonsDownload, OcticonsPlus, OcticonsUpload, OcticonsCopy } from 'src/octicons';
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { IdenticonHashDirective } from './directive/identicon-hash.directive';
import { ShioCommitPageComponent } from './page/shio-commit-page/shio-commit-page.component';
import { ShHistoryService } from './service/history/history.service';
import { OcticonsClock } from 'src/octicons/clock/octicons-clock.component';
import { ShioPostTypeListComponent } from './component/shio-post-type-list/shio-post-type-list.component';
import { ShioModelingPageComponent } from './page/shio-modeling-page/shio-modeling-page.component';
import { ShioObjectActionsComponent } from './component/shio-object-actions/shio-object-actions.component';
import { ShioRepositoryPageComponent } from './page/shio-repository-page/shio-repository-page.component';
import { ShioPostTypePageComponent } from './page/shio-post-type-page/shio-post-type-page.component';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  tabSize: 2
};
registerLocaleData(localeEn, 'en');
registerLocaleData(localePt, 'pt');
const notifierDefaultOptions: NotifierOptions = {
  position: {
      horizontal: {
          position: "right",
          distance: 12
      },
      vertical: {
          position: "bottom",
          distance: 12,
          gap: 10
      }
  },
  theme: "material",
  behaviour: {
      autoHide: 5000,
      onClick: false,
      onMouseover: "pauseAutoHide",
      showDismissButton: true,
      stacking: 4
  },
  animations: {
      enabled: true,
      show: {
          preset: "slide",
          speed: 300,
          easing: "ease"
      },
      hide: {
          preset: "fade",
          speed: 300,
          easing: "ease",
          offset: 50
      },
      shift: {
          speed: 300,
          easing: "ease"
      },
      overlap: 150
  }
};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShioObjectListComponent,
    ApiPlaygroundComponent,
    PostComponent,
    OcticonsRepository,
    OcticonsPencil,
    OcticonsGear,
    OcticonsCopy,
    OcticonsFileDirectory,
    OcticonsNote,
    OcticonsWorkflow,
    OcticonsPackage,
    OcticonsCode,
    OcticonsUpload,
    OcticonsPeople,
    OcticonsHistory,
    OcticonsEye,
    OcticonsDownload,
    OcticonsPlus,
    OcticonsClock,
    ShioBoxListComponent,
    ShioRepositoryAboutComponent,
    ShioPostTypeReportComponent,
    ShioRepositoryListComponent,
    LoginComponent,
    ShioLogoComponent,
    ShioHeaderComponent,
    ShioContentPageComponent,
    ShioRepositoryTabsComponent,
    ShioSitePageComponent,
    ShioPostSettingsPageComponent,
    ShioPostTabsComponent,
    ShioPostTabComponent,
    IdenticonHashDirective,
    ShioCommitPageComponent,
    ShioPostTypeListComponent,
    ShioModelingPageComponent,
    ShioObjectActionsComponent,
    ShioRepositoryPageComponent,
    ShioPostTypePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    ReactiveFormsModule,
    FormsModule,
    AceModule,
    EditorModule,
    CKEditorModule,
    NotifierModule.withConfig(notifierDefaultOptions),
    FontAwesomeModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ACE_CONFIG, useValue: DEFAULT_ACE_CONFIG },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    ShSiteService, ShObjectService, ShPostService, ShHistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
