import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import { QuizService } from "../../services/quiz.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-registered-events',
  templateUrl: './user-registered-events.component.html',
  styleUrls: ['./user-registered-events.component.scss']
})



export class UserRegisteredEventsComponent implements OnInit {

  constructor(
    private homeService : HomeService,
    private router : Router,
    private quizService : QuizService,
    private spinner : NgxSpinnerService
  ) {}

  data_source:any;  

  userId : string;
  userQuizId : string;
  userDetails : any;
  element_data:any;

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin(){
    this.spinner.show();
    console.log("spinner showing")
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
        this.fetchRegisteredQuizDetails();
      } else {
        this.spinner.hide();
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }

  fetchRegisteredQuizDetails(){
    this.quizService.fetchRegisteredQuizDetailsById(this.userId).subscribe(result=>{
      console.log(result)
      this.spinner.hide();
      if(result.success){
        this.data_source = result.data;
        console.log("result is : ",result);
      } else {
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }


  tableColumns  :  string[] = ['date', 'name', 'link'];


  

}