import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppCustomMaterialModule } from '../custom.module/app.custom.material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { ShellComponent } from './shell/shell.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from '../components/post/post.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { LinksComponent } from '../components/links/links.component';
import { HomeWebComponent } from '../components/home-web/home-web.component';
import { CarouselComponent } from '../components/carousel/carousel.component';


@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NotFoundComponent,
    PostComponent,
    NavigationComponent,
    LinksComponent,
    HomeWebComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    AppCustomMaterialModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
