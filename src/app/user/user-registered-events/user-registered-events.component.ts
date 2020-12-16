import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import { QuizService } from "../../services/quiz.service"

@Component({
  selector: 'app-user-registered-events',
  templateUrl: './user-registered-events.component.html',
  styleUrls: ['./user-registered-events.component.scss']
})



export class UserRegisteredEventsComponent implements OnInit {

  constructor(
    private homeService : HomeService,
    private router : Router,
    private quizService : QuizService
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
    let userToken = this.homeService.isLogin();
    if(!userToken){
      Swal.fire({text : "Login first"}).then(result=>{
        return this.router.navigateByUrl('/login')
      }) 
    } 
    this.homeService.decodeToken(userToken).subscribe(result=>{
      if(result.success){
        this.userId = result.data._id;
        this.fetchRegisteredQuizDetails();
      } else {
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }

  fetchRegisteredQuizDetails(){
    this.quizService.fetchRegisteredQuizDetailsById(this.userId).subscribe(result=>{
      console.log(result)
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