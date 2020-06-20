import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectListComponent } from 'src/component/object-list/object-list.component';
import { DashboardComponent } from 'src/component/dashboard/dashboard.component';
import { PostComponent } from 'src/component/post/post.component';
import { PostTypeListComponent } from 'src/component/post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from 'src/component/api-playground/api-playground.component';

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
