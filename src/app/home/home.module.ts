import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './otherPages/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {HomeService} from '../services/home.service'
//Angualr Material
import * as Material from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//components
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LandingPageComponent } from './otherPages/langing-page/langing-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent, 
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatIconModule,
    Material.MatCheckboxModule,
    Material.MatSelectModule
  ],
  providers : [
    HomeService
  ],
  exports : [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
