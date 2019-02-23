import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeWebComponent } from './components/home-web/home-web.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { PostComponent } from './components/post/post.component';
import { BodyWebComponent } from './components/body-web/body-web.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   {
     path: 'home',
     component: HomeWebComponent,
     children: [
      { path: '', component: CarouselComponent },
      { path: 'post', component: PostComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
     ]
   },
   { path: 'admin', component: HomeAdminComponent },
   { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
