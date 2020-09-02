import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

//Angualr Material
import * as Material from '@angular/material';

@NgModule({
  declarations: [HomeComponent, RegisterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatIconModule,
    Material.MatCheckboxModule
  ],
  exports : [
    RegisterComponent,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatIconModule,
    Material.MatCheckboxModule
  ]
})
export class HomeModule { }
