import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {QuizService} from '../../services/quiz.service';
import Swal from 'sweetalert2';
import {Router,ActivatedRoute} from "@angular/router";
import {HomeService} from '../../services/home.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.scss']
})
export class ShowChartComponent implements OnInit {

  constructor(
    private breakpointObserver : BreakpointObserver,
    private quizService : QuizService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private homeService : HomeService,
    private spinner : NgxSpinnerService
    ) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(parameter => {
      console.log(parameter)
      this.myquizId = parameter.testId
      console.log("parameter receiver : ",this.myquizId);
    });

    this.checkLogin();
  }
  myquizId : any;
  quizData:any;
  userId : any;
  
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
    this.quizService.getAnswereSheet(this.myquizId, this.userId,).subscribe((result)=>{
      this.spinner.hide();
      if(result.success){
        this.quizData = result.data;
        
        console.log("quizData : ",this.quizData)
        this.total_ques = this.quizData.answerSheet.totalQuestions
        this.wrong_ques = this.quizData.answerSheet.questionAttempted - this.quizData.answerSheet.markesObtained
        this.right_ques = this.quizData.answerSheet.markesObtained
        this.not_attempt = this.total_ques -(this.right_ques + this.wrong_ques)
        this.values = [this.right_ques , this.not_attempt , this.wrong_ques]
        console.log("values : ",this.values);
      }
      else{
        Swal.fire({icon:'error',text:result.message})
      }
    })
  }
  total_ques : any;
  wrong_ques : any;
  right_ques : any;
  not_attempt : any;
  values :number[];

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 2, rows: 2 },
      };
    })
  );
}
