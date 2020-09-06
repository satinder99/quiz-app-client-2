import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Angualr Material
import * as Material from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//components
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent, 
    RegisterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule ,
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
  exports : [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
