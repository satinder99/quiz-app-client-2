import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './otherPages/dashboard/dashboard.component';
import { NavbarComponent } from './commonPages/navbar/navbar.component';
import { SidebarComponent } from './commonPages/sidebar/sidebar.component';
import { FooterComponent } from './commonPages/footer/footer.component';

import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import * as Material from '@angular/material';
import { FileUploadComponent } from './otherPages/file-upload/file-upload.component';
import { AdminService } from '../services/admin.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent, 
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent, FileUploadComponent, NavBarComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,

    Material.MatSelectModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatListModule
  ],
  providers : [
    AdminService
  ]
})
export class AdminModule { }
