import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {HomeService} from '../../services/home.service'
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private homeService : HomeService,
    private router : Router
  ) {}

  menuItems = ['dashboard', 'edit profile', 'registered events', 'results'];

  signout(){
    console.log("signout reached")
    var signout = this.homeService.deleteUserToken();
    if(signout){
      return Swal.fire({text : "Signout successfully"}).then(()=>{
        this.router.navigateByUrl('/login')
      })
    }
  }
}
