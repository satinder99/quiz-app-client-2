import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginGuardService} from './services/router-guard-service';

const routes: Routes = [
  
//{ path: '', redirectTo : '/home', pathMatch : 'full' },

{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),  },

{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate : [UserLoginGuardService] }, 

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) , canActivate : [UserLoginGuardService]},

{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

/*{path: '', redirectTo: '/home',pathMatch: 'full'},
{path: '**', redirectTo: '/home',pathMatch: 'full'}
*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
