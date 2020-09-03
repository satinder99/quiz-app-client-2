import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  siteKey : string;

  constructor(private fb : FormBuilder) {
    this.siteKey = '6LdWDMYZAAAAAD-E6pikrnyWpQ_2tFdZvBuKJavJ';
   }

  ngOnInit() {
    
  }
  minDate = new Date(1910, 0, 1);
  maxDate = new Date(2010, 0, 1);

  registerForm = this.fb.group({
    firstName : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    lastName : [''],
    mobileNo : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
    dob : ['',[Validators.required]],
    email : ['',[Validators.email,Validators.required]],
    password : ['',[Validators.required,Validators.minLength(10)]],
    cPassword : ['',[Validators.required,Validators.minLength(10)]],
    termsAndConditions : ['true',[Validators.requiredTrue]],
    
  });

  onSubmit(){
    console.log(this.registerForm.value);
  }
}
