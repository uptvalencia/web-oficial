import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWebComponent } from './home-web/home-web.component';
import { NotFoundComponent } from '../share/not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [

  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: HomeWebComponent
      },
      {
        path: 'post',
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WebRoutingModule { }
