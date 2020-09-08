import { Component, OnInit } from '@angular/core';
import {faFacebookSquare,faGooglePlusG,} from "@fortawesome/free-brands-svg-icons";
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import {HomeService} from '../../../services/home.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  google = faGooglePlusG;
  facebook = faFacebookSquare;

  checker:Boolean;
  constructor(
    private fb:FormBuilder,
    private authService : AuthService,
    private homeService : HomeService
  ) { }

  ngOnInit() {
  }
 
  loginForm = this.fb.group({
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required]],
  });

  onSubmit(){
    /*var formData = new FormData();
    formData.append('username',this.loginForm.get('email').value);
    formData.append('password',this.loginForm.get('password').value);
    */console.log(this.loginForm.get('email').value);
    this.homeService.login({'username':this.loginForm.get('email').value,'password':this.loginForm.get('password').value}).subscribe(result => {
      if(result.success){
        Swal.fire({text:'Login successfull.'});
      }
      else{
        Swal.fire({text : 'Login Failed'});
      }
    }),(err => {
      Swal.fire({text : 'Something happened wrong!!!'});
    })

  }
  logInWithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(async user => {
      await this.getUserDetail(user);
      console.log(user)
      this.onSubmit();
    })
  }
  async logInWithFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(async user =>{
    await this.getUserDetail(user);
      this.onSubmit();
    })
  }

  getUserDetail(user){
    console.log(user.email)
    console.log(user.id)
    this.loginForm.get('email').patchValue(user.email);
    this.loginForm.get('password').patchValue(user.id);
    console.log(this.loginForm)
  }
}
