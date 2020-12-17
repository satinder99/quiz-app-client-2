import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare,faGooglePlusG,} from "@fortawesome/free-brands-svg-icons";
import Swal from 'sweetalert2'
import {HomeService} from '../../../services/home.service'

import { AuthService } from "angularx-social-login";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from "angularx-social-login";

import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  siteKey : string;
  faCoffee = faCoffee;
  google = faGooglePlusG;
  facebook = faFacebookSquare

  constructor(
    private fb : FormBuilder,
    private authService : AuthService,
    private homeService : HomeService,
    private spinner: NgxSpinnerService,
    private router:Router
    ) {
    this.siteKey = '6LdWDMYZAAAAAD-E6pikrnyWpQ_2tFdZvBuKJavJ';
   }

  ngOnInit() {
  }
  minDate = new Date(1910, 0, 1);
  maxDate = new Date(2010, 0, 1);
  type : string = "local"
  cPassword : string;
  hide : boolean = false;
  registerForm = this.fb.group({
    firstName : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    lastName : [''],
    mobileNo : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
    dob : ['',[Validators.required]],
    email : ['',[Validators.email,Validators.required]],
    password : ['',[Validators.required,Validators.minLength(10)]],
    profilePic : [''],
    otherToken : [''],
    provider : ['local'],
    gender : ['', Validators.required],
    role : ['',Validators.required],
    termsAndConditions : ['',[Validators.requiredTrue]],
  });

  onSubmit(){
    if(this.cPassword !== this.registerForm.get('password').value){
      Swal.fire({text : "Password not match"});
      return;
    }
    this.spinner.show();
    this.homeService.signup(this.registerForm.value).subscribe((result)=>{
      this.spinner.hide();
      if(result.success){
        Swal.fire(
          'Signup successfully!',
          result.message,
          'success'
        )
      
        this.registerForm.reset();
        this.cPassword = null;
        this.type = 'local';
        this.router.navigateByUrl('/login')
      } else {
      Swal.fire({text : result.message})
      }
    }),(err=>{
      Swal.fire({text : "Some error occured"})
    })
  }

  signUpwithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user=>{
      this.fetchUserDetails(user)
    }).catch(err=>{
      console.log(err)
    })
  }
  signUpwithFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user=>{
      this.fetchUserDetails(user)
    }).catch(err=>{
      console.log(err)
    })
  }

  fetchUserDetails(user : any){
    console.log(user)
    this.type = "social"
    this.registerForm.get('firstName').patchValue(user.firstName)
    this.registerForm.get('lastName').patchValue(user.lastName)
    this.registerForm.get('email').patchValue(user.email)
    this.registerForm.get('profilePic').patchValue(user.photoUrl)
    this.registerForm.get('password').patchValue(user.id)
    this.registerForm.get('otherToken').patchValue(user.idToken)
    this.registerForm.get('provider').patchValue(user.provider)
    this.cPassword = user.id;
  }
} 
