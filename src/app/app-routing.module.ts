import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

{path: '', redirectTo: '/home',pathMatch: 'full'},
{path: '**', redirectTo: '/home',pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
