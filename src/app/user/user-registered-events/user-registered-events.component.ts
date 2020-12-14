import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registered-events',
  templateUrl: './user-registered-events.component.html',
  styleUrls: ['./user-registered-events.component.scss']
})



export class UserRegisteredEventsComponent implements OnInit {

  constructor(
    private homeService : HomeService,
    private router : Router
  ) {}

  data_source = element_data;  

  userId : string;
  userQuizId : string;
  userDetails : any;

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
        this.userDetails = result.data;
        this.userId = result.data._id;
        this.userQuizId = result.data.userId;
      } else {
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }


  tableColumns  :  string[] = ['date', 'name', 'link', 'syllabus'];

}
var element_data = [
  {date : "20/0/2020", name : "Introduction to linux.",link : '/user/test',syllabus:"ssssssssssssssssssss"},
  {date : "20/0/2020", name : "Introduction to linux.",link : '/user/test',syllabus:"ssssssssssssssssssss"}
]