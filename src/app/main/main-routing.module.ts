import { RatesComponent } from './rates/rates.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:MainComponent,
children:[
  {path:'', pathMatch:'full', redirectTo:'main-page' },
  {path:'main-page', component:MainPageComponent },
  {path:'gallery', component:GalleryComponent },
  {path:'about', component:AboutComponent },
  {path:'contact', component:ContactComponent },
  {path:'rates', component:RatesComponent }
]
},
  

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
