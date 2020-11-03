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
    
    // this.quiz = this.fb.group({
    //   name : ['', ],
    //   createdBy : [''],
    //   date : [''],
    //   time : [''],
    //   questionArray : this.fb.array([
    //     // this.returnNewQuestion()
    //   ])
    // }) 

  }

  quiz : FormGroup

  // addNewQuestion(){

  //  (<FormArray>this.quiz.get('questionArray')).push(this.returnNewQuestion());
  //  console.log("after add", this.quiz)
  // }

  // returnNewQuestion() :FormGroup{
  //   return this.fb.group({
  //     question : [''],
  //     type : [''],              // (yes/no)  or  (mcq with 4 questions)
  //     options : this.fb.array([]),
  //     rightAnswer : [''],                   // form of index
  //     rightValue : [''],                    // form of value
    
  //   })
  // }

  // addOptions( type : string,index : number ){   

  //   console.log("before clear", this.quiz.value);
           
  //   while((<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).length != 0){
  //     console.log("in loop");
  //     (<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).removeAt(0)
  //   }
  //   console.log("index is : ", index)

  //   console.log("before", this.quiz.value)
  
  //   if(type == 'mcq'){

  //     for(let i = 0; i< 4; i++){
  //       (<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).push(this.fb.group({value : []}))
  //     }  

  //   } else {

  //     for(let i = 0; i < 2; i++){
  //       (<FormArray>(<FormArray>this.quiz.get('questionArray')).controls[index].get('options')).push(this.fb.group({value : []}))
  //     }  

  //   }
  //   console.log("after", this.quiz.value)
  // }

  submit(){
    console.log(this.quiz.value)
  }
  activeTab : string = 'default';

  toggleUpload(currentTab : string){

    this.activeTab = currentTab;

  }

  currentIndex : number ;

  quizDetails = {
    name : '',
    createdBy : '',
    date : '',
    time : '',
    questionArray : []
  }

  currentQuestion = {
    question : "",
    type : '',
    options : [],
    correctAns : '',
    correctIndex : null
  }

  optionBinding = {
    option1 : " "
  }


  editQuizName : boolean = false;
  editQuizcreatedBy : boolean = false;
  editQuizDate : boolean = false;
  editQuizTime : boolean = false;

  update : boolean = false;

  refreshCurrentQuestion(){

    this.currentQuestion = {
      question : "",
      type : '',
      options : [],
      correctAns : '',
      correctIndex : null
    }
  }

  questionAdd(){
    console.log(this.quizDetails)
    if(!this.currentQuestion.type) return;
    if(!this.currentQuestion.question) return;
    if(!this.currentQuestion.options) return;
    if(!this.currentQuestion.correctIndex) return;
    if(this.currentQuestion.correctIndex < 0 && this.currentQuestion.correctIndex > 4) return;
    
    this.currentQuestion.correctIndex--;
    this.currentQuestion.correctAns = this.currentQuestion.options[this.currentQuestion.correctIndex];
      

    if(this.update){

      console.log("update question")
      this.quizDetails.questionArray[this.updateIndex] = this.currentQuestion;
      this.refreshCurrentQuestion();
      this.update = false;
      this.updateIndex = null;
    } else {
      
      console.log("add question");
      this.quizDetails.questionArray.push(this.currentQuestion);
      console.log(this.quizDetails);
      this.refreshCurrentQuestion();
    }
  }

  addOptions(event){
    this.currentQuestion.type = event.value;
  }

  updateIndex : number;

  updateques(index : number){
    this.updateIndex = index;
    this.currentQuestion = this.quizDetails.questionArray[index];
    this.update = true;
  }
}
