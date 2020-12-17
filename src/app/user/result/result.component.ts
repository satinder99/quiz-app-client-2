import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { HomeService } from 'src/app/services/home.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
    private quizService : QuizService,
    private homeService : HomeService,
    private router : Router,
    private spinner : NgxSpinnerService
  ) {}
  data_source = element_data;  

  ngOnInit() {
    this.checkLogin()
    
  }

  userId:any;

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
      console.log("result", result);
      if(result.success){
        this.userId = result.data._id;
        console.log("result varibale is : ",result)
        this.afterLoginCheck();
      } else {
        this.spinner.hide();
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }

  afterLoginCheck(){
    this.quizService.fetchPastQuizDetails(this.userId).subscribe((result)=>{
      this.spinner.hide();
      if(result.success){
        this.data_source = result.data;
      }
      else{
        Swal.fire({text:result.message,icon:'error'});
      }
    })
  }

  tableColumns  :  string[] = ['date', 'name', 'checkresult'];

}
var element_data = [
  {date : "20/0/2020", name : "Introduction to linux.",_id: "15455768552255"},
  {date : "20/0/2020", name : "Introduction to linux.",link: '2'}
]