import { Component, OnInit } from '@angular/core';
import {faFacebookSquare,faGooglePlusG,} from "@fortawesome/free-brands-svg-icons";
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  google = faGooglePlusG;
  facebook = faFacebookSquare;
  constructor(
    private fb:FormBuilder,
    private authService : AuthService
  ) { }

  ngOnInit() {
  }
 
  loginForm = this.fb.group({
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required]],
  });

  onSubmit(){
    console.log(this.loginForm)

  }
  logInWithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      console.log('user fetched : ');
      console.log(user)
      this.getUserDetail(user);
    })
  }
  logInWithFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user =>{
      this.getUserDetail(user);
    })
  }

  getUserDetail(user){
    console.log('form values are : '+user);
    console.log(user)
    this.loginForm.get('email').patchValue(user.email);
    this.loginForm.get('password').patchValue(user.id);
  }
}
