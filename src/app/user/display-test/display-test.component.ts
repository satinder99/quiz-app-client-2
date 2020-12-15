import { Component, OnInit, ViewChild, Inject, HostListener} from '@angular/core';
import {CountdownComponent} from 'ngx-countdown';
import { DOCUMENT } from '@angular/common';
import * as screenfull from 'screenfull';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service'
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.scss']
})
export class DisplayTestComponent implements OnInit {

  x = 0;
  y:boolean=false;
 /* @HostListener('window:focus', ['$event'])
  async onFocus(event: FocusEvent) {

      // Do something      
    if(this.start_quiz){

    
      console.log('document focus gain');
      if(this.x == 2)
      {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your quiz is END now',
          target: document.getElementById("alert")
        });

        //window.location.href = "http://localhost:4200";
        
      }
      if(this.x==1)
      {	Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please stay on quiz otherwise quiz will end automatically next time',
        target: document.getElementById("alert")
        })   
        
      }
    }
  }

  @HostListener('window:blur', ['$event'])
  onBlur(event: FocusEvent): void {

     // Do something
    if(this.start_quiz){
      console.log('document focus lost');
      this.x += 1;
    }
  }
*/




  @ViewChild('countdown', { static: false }) private countdown: CountdownComponent;
  
  elem: any;
  testname : any;
constructor(
        @Inject(DOCUMENT) private document: any,
        private activatedRoute: ActivatedRoute,
        private quizService : QuizService,
        private homeService : HomeService,
        private router : Router
    ) {
      this.checkLogin();
}

  quiz : any;
  total_ques : any;
  
  total_time=0;
  
  ans_list = [];
  correct_answere:any;
  start_quiz:boolean;
  ques_no = 0;
  myquizId : any;
  userDetails:any;

  async ngOnInit() {
    
    this.elem = document.getElementById("button1");
    
    this.testname = document.getElementById("myTest");
    this.start_quiz = false;

    this.activatedRoute.params.subscribe(parameter => {
      console.log(parameter)
      this.myquizId = parameter.testId
      console.log("parameter receiver : ",this.myquizId);
    });
   /* this.quizId = this.activatedRouteSnapshot.params.parameter
    console.log("PArameter received : ",this.quizId);
*/  
    await this.quizService.quizById(this.myquizId).subscribe((result)=>{
      if(result.success){
        this.quiz = result.data;
        this.total_ques = result.data.questionArray.length;
        console.log("result.data.questionArray.length : ",result.data.questionArray.length)
        console.log(this.quiz);
      }
      else{
        console.log("error occur to fetch a quiz!!! Please try again later");
      }
    })

    

}

  update_list(){
    this.ans_list[this.ques_no] = this.correct_answere;
  }

  async prevByOne(){
    this.update_list();
    this.ques_no -= 1;
    this.correct_answere=null;
    console.log(this.ans_list);
  }
  async nextByOne(){
    this.update_list();

    this.ques_no += 1;
    this.correct_answere = null;
    console.log(this.ans_list);
  }

  full_screen(){

  
    if (screenfull.isEnabled) {
        screenfull.request(this.testname);
        this.start_quiz = true;
        if(this.start_quiz){
          this.total_time = this.total_ques * 60;
        }
        console.log("total ques : ",this.total_ques);
      }
  
  }
  counter = 0;
  questionAttempted(){
    this.ans_list.forEach(element => {
      this.counter += 1;
    }); 
    return this.counter; 
  }

  quizDetails:any;

  submitQuiz(){
    this.update_list();

    console.log("submitting your quiz");
    this.quizDetails = {
      quizId : this.myquizId,
      userId : this.userDetails._id,
      questionAttempted : this.questionAttempted(),
      markedAns : this.ans_list
    } 
    console.log("Quiz details are :" , this.quizDetails);
    Swal.fire({
      title: 'Are you sure to submit the quiz?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      target: document.getElementById("alert"),
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit'
    }).then((result) => {

      if (result.isConfirmed) {
        
        this.quizService.savequiz(this.quizDetails).subscribe(result=>{
          if(result.success){
            Swal.fire({
              icon:'success',
              title:'Saved!',
              text:'Your response has been saved.',
              target: document.getElementById("alert"),
            
            }).then(result=>{
              window.location.reload()
            })
          }
          else{
            Swal.fire({text : result.message,target: document.getElementById("alert"),});
          }
          })
        
      }
    })
  }


  checkLogin(){
    let userToken = this.homeService.isLogin();

    if(!userToken){
      Swal.fire({text : "Login first"}).then(result=>{
        return this.router.navigateByUrl('/login')
      }) 
    }

    this.homeService.decodeToken(userToken).subscribe(result=>{
      console.log("result", result);
      if(result.success){
        this.userDetails = result.data;
        console.log("result varibale is : ",result)
        this.afterLoginCheck();
      } else {
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }
afterLoginData:any;
  afterLoginCheck(){
    this.quizService.fetchAllQuiz().subscribe((result) => {
      if(result.success){
        this.afterLoginData = result.data;
        console.log("afterLoginData : ",this.afterLoginCheck);
      }
      else{
        console.log("ERROR FROM NODEJS");
      }
    }) 
  }
  
}
