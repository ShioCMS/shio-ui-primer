import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login';
import { AuthGuard } from './_helpers';
import { ShioContentPageComponent } from './page/shio-content-page/shio-content-page.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ShioObjectListComponent } from './page/shio-object-list/shio-object-list.component';
import { PostComponent } from './page/post/post.component';
import { PostTypeListComponent } from './page/post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from './page/api-playground/api-playground.component';
import { ShioSitePageComponent } from './page/shio-site-page/shio-site-page.component';
import { ShioPostSettingsPageComponent } from './page/shio-post-settings-page/shio-post-settings-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'content', component: ShioContentPageComponent, canActivate: [AuthGuard],
    children: [{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'object-list/:id', component: ShioObjectListComponent, canActivate: [AuthGuard] },
    { path: 'post/:id', component: PostComponent, canActivate: [AuthGuard] },
    { path: 'post/:id/settings', component: ShioPostSettingsPageComponent, canActivate: [AuthGuard] },
    { path: 'modeling', component: PostTypeListComponent, canActivate: [AuthGuard] },
    { path: 'playground', component: ApiPlaygroundComponent, canActivate: [AuthGuard] },
    { path: 'site/:id', component: ShioSitePageComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/content/dashboard', pathMatch: 'full', canActivate: [AuthGuard] }
    ]
  },
  { path: '', redirectTo: '/content/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
