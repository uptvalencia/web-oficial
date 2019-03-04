import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatCardModule } from '@angular/material/card';

// For MDB Angular Free
import { NavbarModule,
          CardsFreeModule,
          CarouselModule
        } from 'angular-bootstrap-md';

import { WebRoutingModule } from './web-routing.module';

// Components

import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { ShellComponent } from './shell/shell.component';
import { NotFoundComponent } from '../share/not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LinksComponent } from './links/links.component';
import { HomeWebComponent } from './home-web/home-web.component';
import { CarouselComponent } from './carousel/carousel.component';


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
    WebRoutingModule,

    // MDBBootstrap
    NavbarModule,
    CardsFreeModule,
    CarouselModule.forRoot(),


    // Material
    MatCardModule
  ],
  exports: [
    ShellComponent
  ]
})
export class WebModule { }
