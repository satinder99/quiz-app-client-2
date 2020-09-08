import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {RegisterComponent} from './register/register.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,
     children : [
      // { path: '', redirectTo : '/register', pathMatch : "full" },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component : LoginComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }