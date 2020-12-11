import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.scss']
})
export class DisplayTestComponent implements OnInit {

  constructor() { }
  
  /*test1 = {
    "name": "pyhton", 
    "createdBy": "satinder", 
    "date": "2021-01-07", 
    "time": "19:00", 
    "questionArray": 
    [
        {"question": "testing ques 1","type": "mcq", "options": [ { "value": "option1" },{ "value": "option2" },{ "value": "optino3" },{ "value": "option4" } ], "rightAnswer": "", "rightValue": "" }, 
        { "question": "question 2", "type": "mcq", "options": [ { "value": "option1" }, { "value": "option2" }, { "value": "option3" }, { "value": "option4" } ], "rightAnswer": "", "rightValue": "" }, 
        { "question": "testing ques 3", "type": "mcq", "options": [ { "value": "option1" }, { "value": "option2" }, { "value": "option3" }, { "value": "option4" } ], "rightAnswer": "", "rightValue": "" }, 
        { "question": "question4", "type": "other", "options": [ { "value": "true" }, { "value": "false" } ], "rightAnswer": "", "rightValue": "" } 
    ] 
  }*/

  test1={ "name": "pyhton", "createdBy": "satinder", "date": "2021-01-10", "time": "13:49", "questionArray": [ 
    { "question": "question1 ", "type": "mcq", "options": [ "option1", "option2", "optino3", "option4" ], "correctAns": "option1", "correctIndex": 0 }, 
    { "question": "yes no wala question", "type": "other", "options": [ "yes", "no" ], "correctAns": "no", "correctIndex": 1 } 
  ] } 

  ques_no = 0;
  ngOnInit() {
    
  }

  prevByOne(){
    this.ques_no -= 1;
  }
  nextByOne(){
    this.ques_no += 1;
  }
}
