import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppCustomMaterialModule } from './custom.module/app.custom.material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeWebComponent } from './components/home-web/home-web.component';
import { NewsComponent } from './components/news/news.component';
import { LinksComponent } from './components/links/links.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyWebComponent } from './components/body-web/body-web.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeAdminComponent,
    HomeWebComponent,
    NewsComponent,
    LinksComponent,
    PageNoFoundComponent,
    BlogComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    BodyWebComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCustomMaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
