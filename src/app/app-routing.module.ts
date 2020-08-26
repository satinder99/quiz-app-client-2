import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
