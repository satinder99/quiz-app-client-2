import { Component, OnInit } from '@angular/core';

import {Form, FormArray, FormBuilder, FormGroup} from '@angular/forms'
import { QuizService } from '../../services/quiz.service';
@Component({
  selector: 'app-sch-test',
  templateUrl: './sch-test.component.html',
  styleUrls: ['./sch-test.component.scss']
})
export class SchTestComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private quizServ : QuizService 
  ) { }

  ngOnInit() {
    
    this.quiz = this.fb.group({
      name : ['', ],
      createdBy : [''],
      teacherId : [''],
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

  
    if(type == 'mcq'){

      for(let i = 0; i< 4; i++){
        (<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).push(this.fb.group({value : []}))
      }  

    } else {

      for(let i = 0; i < 2; i++){
        (<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).push(this.fb.group({value : []}))
      }  

    }
  }

  submit(){
    console.log(this.quiz.value)
    this.quizServ.addQuiz(this.quiz.value).subscribe((result)=>{
      if(result.success){
          alert(result.message)
    console.log("form sent to service");
      }
    })
    
    
  }
}
