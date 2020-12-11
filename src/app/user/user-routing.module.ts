import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserRegisteredEventsComponent } from './user-registered-events/user-registered-events.component';
import { DisplayTestComponent } from './display-test/display-test.component';

const routes: Routes = [
  { path: '', component: UserComponent, pathMatch : 'prefix',
    children : [ // All other router come under children of usercomponent
              {path : 'dashboard', component : UserDashComponent},
              {path : 'edit profile',component : UserEditProfileComponent},
              {path : 'registered events',component : UserRegisteredEventsComponent},
              {path : 'test',component : DisplayTestComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
