import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeWebComponent } from './components/home-web/home-web.component';



const routes: Routes = [
  {
    path: '',
    component: HomeWebComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
