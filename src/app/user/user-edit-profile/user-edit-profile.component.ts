import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import {HomeService} from '../../services/home.service'
import {Router} from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.scss']
})
export class UserEditProfileComponent implements OnInit {

  minDate = new Date(1910, 0, 1);
  maxDate = new Date(2010, 0, 1);

  userId : string;
  userQuizId : string;
  userDetails : any;
  constructor(
    private fb : FormBuilder,
    private spinner: NgxSpinnerService,
    private homeService : HomeService,
    private router : Router
    ) {
     
      
     }

  
  ngOnInit() {
    this.checkLogin();
  }

  checkLogin(){
    this.spinner.show();
    let userToken = this.homeService.isLogin();
    if(!userToken){
      this.spinner.hide();
      Swal.fire({text : "Login first"}).then(result=>{
        return this.router.navigateByUrl('/login')
      }) 
    } 
    this.homeService.decodeToken(userToken).subscribe(result=>{
      if(result.success){
        this.userId = result.data._id;
        this.fetchUserDetailsFromBackend();
      } else {
        this.spinner.hide();
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }

  

  registerForm = this.fb.group({
    firstName : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    lastName : [''],
    mobileNo : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
    dob : ['',[Validators.required]],
    email : ['',[Validators.email,Validators.required]],
    profilePic : [''],
    gender : ['', Validators.required],
  });

  fetchUserDetailsFromBackend(){
    this.homeService.fetchUserDetailsById(this.userId).subscribe(result=>{
      console.log(result)
      if(result.success){
        this.spinner.hide();
        this.userDetails = result.data;
        this.fetchUserDetails(this.userDetails);
        
      } else {
        this.spinner.hide();
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }

  onSubmit(){
    this.spinner.show();
    console.log(this.registerForm.value);
    this.homeService.updateProfile(this.registerForm.value,this.userDetails._id).subscribe((result)=>{
      if(result.success){
        this.spinner.hide();
        Swal.fire({
          text:result.message,
          icon:'success'
        })
      }
      else{
        this.spinner.hide();
        Swal.fire({text : result.message});
      }
    })
  }

  fetchUserDetails(user : any){
    console.log(user)
    this.registerForm.get('firstName').patchValue(user.firstName)
    this.registerForm.get('lastName').patchValue(user.lastName)
    this.registerForm.get('email').patchValue(user.email)
    this.registerForm.get('mobileNo').patchValue(user.mobileNo)
    this.registerForm.get('dob').patchValue(user.dob)
    this.registerForm.get('profilePic').patchValue(user.profilePic)
    this.registerForm.get('gender').patchValue(user.gender)
  };
}


