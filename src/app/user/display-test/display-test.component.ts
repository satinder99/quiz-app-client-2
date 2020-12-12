import { Component, OnInit,ViewChild } from '@angular/core';
import {CountdownComponent} from 'ngx-countdown';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.scss']
})
export class DisplayTestComponent implements OnInit {

  @ViewChild('countdown', { static: false }) private countdown: CountdownComponent;
  
  constructor() { }

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

  ques_no = 0;
  ngOnInit() {

    
  }
  update_list(){
    this.ans_list[this.ques_no] = this.correct_answere;
  }

  async prevByOne(){
    await this.update_list();
    this.ques_no -= 1;
    console.log(this.ans_list);
  }
  async nextByOne(){
    await this.update_list();
    this.ques_no += 1;
    console.log(this.ans_list);
  }
}
