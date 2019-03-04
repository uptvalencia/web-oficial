import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../app/components/share/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './components/app.web/web.module#WebModule'
  },
  {
    path: 'admin',
    loadChildren: './components/app.admin/admin.module#AdminModule'
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

/*

  https://academia-binaria.com/paginas-y-rutas-angular-spa/

*/
