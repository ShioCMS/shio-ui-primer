import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShioObjectListComponent } from './page/shio-object-list/shio-object-list.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PostComponent } from './page/post/post.component';
import { PostTypeListComponent } from './page/post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from './page/api-playground/api-playground.component';
import { LoginComponent } from './page/login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'object-list/:id', component: ShioObjectListComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'modeling', component: PostTypeListComponent },
  { path: 'playground', component: ApiPlaygroundComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
