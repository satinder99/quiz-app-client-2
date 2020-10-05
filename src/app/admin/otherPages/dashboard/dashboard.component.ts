import { Component, OnInit } from '@angular/core';

import {Form, FormArray, FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    
    this.quiz = this.fb.group({
      name : ['', ],
      createdBy : [''],
      date : [''],
      time : [''],
      questionArray : this.fb.array([
        this.returnNewQuestion()
      ])
    }) 

  }

  quiz : FormGroup

  addNewQuestion(){

   (<FormArray>this.quiz.get('questionArray')).push(this.returnNewQuestion());
   console.log("after add", this.quiz)
  }

  returnNewQuestion() :FormGroup{
    return this.fb.group({
      question : [''],
      type : [''],              // (yes/no)  or  (mcq with 4 questions)
      options : this.fb.array([]),
      rightAnswer : [''],                   // form of index
      rightValue : [''],                    // form of value
    
    })
  }

  addOptions( type : string,index : number ){   

    console.log("before clear", this.quiz.value);
           
    while((<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).length != 0){
      console.log("in loop");
      (<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).removeAt(0)
    }
    console.log("index is : ", index)

    console.log("before", this.quiz.value)
  
    if(type == 'mcq'){

      for(let i = 0; i< 4; i++){
        (<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).push(this.fb.group({value : []}))
      }  

    } else {

      for(let i = 0; i < 2; i++){
        (<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).push(this.fb.group({value : []}))
      }  

    }
    console.log("after", this.quiz.value)
  }

  submit(){
    console.log(this.quiz.value)
  }

  byFile : boolean = false;
  toggleUpload(){
    this.byFile = !this.byFile
  }
}
