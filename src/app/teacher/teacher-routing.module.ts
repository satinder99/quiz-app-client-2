import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherNavComponent } from './teacher-nav/teacher-nav.component';
import { SchTestComponent } from './sch-test/sch-test.component';

const routes: Routes = [
  { path: '', component: TeacherNavComponent, pathMatch : 'prefix',
    children : [
                          // All other router come under children of usercomponent
              {path : 'dashboard', component : SchTestComponent},
              { path : 'schedule test', component : SchTestComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
