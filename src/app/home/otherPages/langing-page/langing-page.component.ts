import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare,faGooglePlusG, faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  facebook = faFacebookSquare;
  google = faGooglePlusG;
  linkedIn = faLinkedin;
  instagram = faInstagram;
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  gotoRegister(){
    this.router.navigateByUrl('/home/register')
  }
}
