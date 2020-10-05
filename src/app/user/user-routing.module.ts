import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDashComponent } from './user-dash/user-dash.component';

const routes: Routes = [
  { path: '', component: UserComponent, pathMatch : 'prefix',
    children : [
      {path : 'dashboard', component : UserDashComponent},
      {path : '**', redirectTo : '/user/dashboard', pathMatch : 'full'}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
