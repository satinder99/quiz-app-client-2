import { Component, OnInit, ViewChild, Inject, HostListener} from '@angular/core';
import {CountdownComponent} from 'ngx-countdown';
import { DOCUMENT } from '@angular/common';
import * as screenfull from 'screenfull';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.scss']
})
export class DisplayTestComponent implements OnInit {

  x = 0;
  y:boolean=false;
  @HostListener('window:focus', ['$event'])
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

        window.location.href = "http://localhost:4200";
        
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





  @ViewChild('countdown', { static: false }) private countdown: CountdownComponent;
  
  elem: any;
  testname : any;
constructor(
        @Inject(DOCUMENT) private document: any
    ) {
}
  test1={ "name": "pyhton", "createdBy": "satinder", "date": "2021-01-10", "time": "13:49", "questionArray": [ 
    { "question": "question1 ", "type": "mcq", "options": [ "option1", "option2", "optino3", "option4" ], "correctAns": "option1", "correctIndex": 0 }, 
    { "question": "yes no wala question", "type": "other", "options": [ "yes", "no" ], "correctAns": "no", "correctIndex": 1 }, 
    { "question": "question1 ", "type": "mcq", "options": [ "option1", "option2", "optino3", "option4" ], "correctAns": "option1", "correctIndex": 0 },
    { "question": "question1 ", "type": "mcq", "options": [ "option1", "option2", "optino3", "option4" ], "correctAns": "option1", "correctIndex": 0 },
    { "question": "question1 ", "type": "mcq", "options": [ "option1", "option2", "optino3", "option4" ], "correctAns": "option1", "correctIndex": 0 },
  ] } 
  total_ques = this.test1.questionArray.length;
  total_time=0;
  
  ans_list = [];
  correct_answere:any;
  start_quiz:boolean;
  ques_no = 0;
  ngOnInit(): void {
    this.elem = document.getElementById("button1");
    
    this.testname = document.getElementById("myTest");
    this.start_quiz = false;
    

}

  update_list(){
    this.ans_list[this.ques_no] = this.correct_answere;
  }

  async prevByOne(){
    this.update_list();
    this.ques_no -= 1;
    console.log(this.ans_list);
  }
  async nextByOne(){
    this.update_list();

    this.ques_no += 1;
    console.log(this.ans_list);
  }

  full_screen(){

  
    if (screenfull.isEnabled) {
        screenfull.request(this.testname);
        this.start_quiz = true;
        if(this.start_quiz){
          this.total_time = this.total_ques * 60;
        }
      }
  
  }
  
}
