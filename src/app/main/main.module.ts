import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './../footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';



import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component'
import { GoogleMapsModule } from '@angular/google-maps';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { RatesComponent } from './rates/rates.component';


@NgModule({
  declarations: [
    MainPageComponent,
    MainComponent,
    GalleryComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    RatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MainRoutingModule,
    MatButtonModule,
    NgbCarouselModule,
    NgbModule,
    GoogleMapsModule,
    CarouselModule.forRoot(),
    NzButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[
    MainPageComponent,
    MainComponent,
    GalleryComponent
  ]
})
export class MainModule { }
