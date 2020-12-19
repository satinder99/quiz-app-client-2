import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {DashboardComponent} from './otherPages/dashboard/dashboard.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [{ 
  path: '', component: NavBarComponent , pathMatch : 'prefix',
  children : [
    {path : 'dashboard', component : DashboardComponent},
    {path : '**', component : DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
