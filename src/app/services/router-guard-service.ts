import { Injectable } from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import { HomeService } from './home.service'

@Injectable()
export class UserLoginGuardService implements CanActivate {

    constructor( private homeService : HomeService,
        private router : Router ){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {

        if(!!this.homeService.isLogin()){
            return true
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}