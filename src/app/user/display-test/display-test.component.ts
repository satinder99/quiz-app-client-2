import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {CountdownComponent} from 'ngx-countdown';
import { DOCUMENT } from '@angular/common';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.scss']
})
export class DisplayTestComponent implements OnInit {

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
  total_time = this.total_ques * 60;
  
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
      }
  
  }




  openFullscreen() {
    console.log("fullscreen");
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }/* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }


}
