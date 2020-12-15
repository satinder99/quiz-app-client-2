import { Component, OnInit } from '@angular/core';

import {Form, FormArray, FormBuilder, FormGroup} from '@angular/forms'
import Swal from 'sweetalert2';

import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private adminService : AdminService
  ) { }

  // minDate : Date
  minDate : any
  ngOnInit() {
    let date = new Date();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let day = date.getDate();
    this.minDate = `${year}-${month}-${day}`
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
    createdByName : '',
    createdBy : '5fd34624161ae162f4b94241',
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

    this.currentQuestion.type = 'mcq'
    if(!this.currentQuestion.type) return;
    if(!this.currentQuestion.question) return;
    if(!this.currentQuestion.options) return;
    if(!this.currentQuestion.correctIndex) return;
    if(this.currentQuestion.correctIndex < 0 && this.currentQuestion.correctIndex > 4) return;
    
    this.currentQuestion.correctIndex--;
    this.currentQuestion.correctAns = this.currentQuestion.options[this.currentQuestion.correctIndex];
      

    if(this.update){

      this.quizDetails.questionArray[this.updateIndex] = this.currentQuestion;
      this.refreshCurrentQuestion();
      this.update = false;
      this.updateIndex = null;

    } else {
      
      this.quizDetails.questionArray.push(this.currentQuestion);
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

  newQuestions(event){
    for(let i = 0; i < event.length; i++){
      this.quizDetails.questionArray.push(event[i]);
    }
    this.activeTab = 'default';
  }

  saveQuiz(){


    if(!this.quizDetails.name){
      return Swal.fire({text : "Enter quiz name"})
    }
    if(!this.quizDetails.date){
      return Swal.fire({text : "Enter quiz date"})
    }
    if(!this.quizDetails.time){
      return Swal.fire({text : "Enter quiz time"})
    }
    if(this.quizDetails.questionArray.length == 0){
      return Swal.fire({text : "Enter questions"})
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save it!'
    }).then((result) => {

      if (result.isConfirmed) {
        
        this.adminService.createQuiz(this.quizDetails).subscribe(result=>{
          if(result.success){
            Swal.fire(
              'Saved!',
              'Your file has been saved.',
              'success'
            ).then(result=>{
              window.location.reload()
            })
          }
          else{
            Swal.fire({text : result.message});
          }
          })
        
      }
    })
  }
}
