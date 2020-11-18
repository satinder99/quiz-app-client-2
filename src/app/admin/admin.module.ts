import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent, 
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent, FileUploadComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    Material.MatSelectModule,
  ]
})
export class AdminModule { }
