import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {RegisterComponent} from './register/register.component'

const routes: Routes = [
  { path: '', component: HomeComponent ,
     children : [
      // { path: '', redirectTo : '/register', pathMatch : "full" },
    { path: 'register', component: RegisterComponent }
  ] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
