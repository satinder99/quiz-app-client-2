import { Component, OnInit } from '@angular/core';
import {faFacebookSquare,faGooglePlusG, faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  facebook = faFacebookSquare;
  google = faGooglePlusG;
  linkedIn = faLinkedin;
  instagram = faInstagram;
  
  constructor() { }

  ngOnInit() {
  }

}
