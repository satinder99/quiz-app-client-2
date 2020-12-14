import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {HomeService} from  '../services/home.service'

//charts and schematics
import { ChartsModule, ThemeService} from 'ng2-charts';
import { UserNavComponent } from './user-nav/user-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserDashComponent } from './user-dash/user-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { TechnicalSkillsChartComponent } from './charts/technical-skills-chart/technical-skills-chart.component';
import { ProgressOfSkillsComponent } from './charts/progress-of-skills/progress-of-skills.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as Material from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserRegisteredEventsComponent } from './user-registered-events/user-registered-events.component';
import { DisplayTestComponent } from './display-test/display-test.component';
import { ResultComponent } from './result/result.component';
import { ShowChartComponent } from './show-chart/show-chart.component';
import { CountdownModule, CountdownGlobalConfig, CountdownConfig } from 'ngx-countdown';


export function countdownConfigFactory(): CountdownConfig {
  return {};
}

@NgModule({
  declarations: [UserComponent, UserNavComponent, UserDashComponent, CardComponent, TechnicalSkillsChartComponent, ProgressOfSkillsComponent, UserEditProfileComponent, UserRegisteredEventsComponent, DisplayTestComponent, ResultComponent, ShowChartComponent],
  imports: [
    CommonModule,
    UserRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatTableModule,
    Material.MatRadioModule,
    Material.MatCardModule,

    NgxSpinnerModule,

    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    SlickCarouselModule,
    CountdownModule
  ],
  providers:[
    ThemeService,
    Material.MatDatepickerModule,
    { provide: CountdownGlobalConfig, useFactory: countdownConfigFactory },
    { provide: Window, useValue: window },
    HomeService
  ]
})
export class UserModule { }
