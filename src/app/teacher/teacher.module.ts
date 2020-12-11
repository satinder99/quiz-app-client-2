import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherNavComponent } from './teacher-nav/teacher-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import * as Material from '@angular/material';
import { SchTestComponent } from './sch-test/sch-test.component';
import { QuizService } from '../services/quiz.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [DashboardComponent, TeacherNavComponent, SchTestComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    HttpClientModule,

    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatListModule,
    Material.MatIconModule,
    Material.MatInputModule,
    Material.MatSelectModule,

    ReactiveFormsModule,
    FormsModule,
  ],
  providers : [
    QuizService
  ],
})
export class TeacherModule { }
