import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectListComponent } from './object-list/object-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostTypeListComponent } from './post-type-list/post-type-list.component';
import { ApiPlaygroundComponent } from './api-playground/api-playground.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'object-list/:id', component: ObjectListComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'modeling', component: PostTypeListComponent },
  { path: 'playground', component: ApiPlaygroundComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
