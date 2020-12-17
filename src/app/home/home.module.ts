import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './otherPages/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlipModule } from 'ngx-flip';

import {HomeService} from '../services/home.service';

import { NgxSpinnerModule } from "ngx-spinner";
//Angualr Material
import * as Material from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//components
import { HeaderComponent } from './pages/header/header.component';
//import { FooterComponent } from './pages/footer/footer.component';
import { LandingPageComponent } from './otherPages/langing-page/langing-page.component';
import { LoginComponent } from './otherPages/login/login.component';

@NgModule({
  declarations: [
    HomeComponent, 
    RegisterComponent,
    HeaderComponent,
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
    FlipModule,
    NgxSpinnerModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatIconModule,
    Material.MatCheckboxModule,
    Material.MatSelectModule,
    Material.MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers : [
    HomeService
  ],
  entryComponents : [
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
