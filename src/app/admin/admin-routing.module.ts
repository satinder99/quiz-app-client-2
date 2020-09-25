import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {DashboardComponent} from './otherPages/dashboard/dashboard.component'

const routes: Routes = [{ 
  path: '', component: AdminComponent , pathMatch : 'prefix',
  children : [
    {path : '', component : DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
