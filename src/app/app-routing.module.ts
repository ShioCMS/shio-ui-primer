import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ObjectListComponent } from './component/object-list/object-list.component';
import { PostComponent } from './component/post/post.component';
import { PostTypeListComponent } from './component/post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from './component/api-playground/api-playground.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'object-list/:id', component: ObjectListComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'modeling', component: PostTypeListComponent },
  { path: 'playground', component: ApiPlaygroundComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
