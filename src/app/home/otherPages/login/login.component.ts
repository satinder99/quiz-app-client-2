import { Component, OnInit } from '@angular/core';
import {faFacebookSquare,faGooglePlusG,} from "@fortawesome/free-brands-svg-icons";
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import {HomeService} from '../../../services/home.service'
import Swal from 'sweetalert2';

import { NgxSpinnerService } from "ngx-spinner";
import {Router} from "@angular/router";

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
    private homeService : HomeService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
 
  }

  flipDiv : boolean = false;
  message : string = `Your email is not verified yet . Please verify your email by the link provided to your email`
 
  loginForm = this.fb.group({
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required]],
  });

  onSubmit(){
    this.spinner.show();
    this.homeService.login( {'username':this.loginForm.get('email').value, 
                            'password':this.loginForm.get('password').value})
                    .subscribe(result => {
      this.spinner.hide();
      
      if(result.success){
        if(result.emailConfirm == false){
          Swal.fire({text : result.message}).then(result=>{
            this.flipDiv = true
          })

        }else {
          Swal.fire('Login successfully!',
          '',
          'success')
          this.afterLogin(result);
        } 
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
      await this.getUserDetail(user);         // not need of await
      
      this.onSubmit();
    })
  }
  logInWithFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(async user =>{
    await this.getUserDetail(user);               // not need of await
      this.onSubmit();
    })
  }

  afterLogin(result : any){
    var saved = this.homeService.saveToken(result.userToken);
    if(saved){
      this.router.navigate(['/user/dashboard']);
    } else {
      Swal.fire({text : "Something went wrong"})
    }
  }

  getUserDetail(user){
    this.loginForm.get('email').patchValue(user.email);
    this.loginForm.get('password').patchValue(user.id);
  }

  resendVerification(){
    if(!this.loginForm.get('email').value){
      this.flipDiv = false;
      return;
    };
    this.homeService.resendVerificationLink(this.loginForm.get('email').value).subscribe(result=>{
      if(result.success){
        Swal.fire(
          'Email Sent!',
          result.message,
          'success'
        ).then(result=>{
          this.flipDiv = false;
        })
        
      } else {
        Swal.fire({text : result.message})
      }
    })
  }
}
