import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {RegisterComponent} from './otherPages/register/register.component';
import {LandingPageComponent} from './otherPages/langing-page/langing-page.component'

const routes: Routes = [
  { path: '', component: HomeComponent ,
      children : [
        {path : 'main', component : LandingPageComponent},
        { path: 'register', component: RegisterComponent },
        {path : '**', redirectTo : '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }