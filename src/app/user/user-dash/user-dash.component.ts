import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuizService } from '../../services/quiz.service';
import {HomeService} from '../../services/home.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss']
})
export class UserDashComponent implements OnInit{

userDetails : any;
userId : string;
userQuizId : string;


  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
          personal : {cols:1, rows : 2},
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
        personal : {cols :4,rows : 1},
      };
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private quizService : QuizService,
    private homeService : HomeService,
    private router : Router
    ) {
      
    }
    mydatas : any;

  ngOnInit(){
    
    this.checkLogin();
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
        this.userId = result.data._id;
        this.fetchUserDetails();
        if(this.userDetails.profilePic.length == 0)
        {
          this.userDetails.profilePic = "https://static.thenounproject.com/png/3070444-200.png";
        }
        this.afterLoginCheck();
      } else {
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }

  fetchUserDetails(){
    this.homeService.fetchUserDetailsById(this.userId).subscribe(result=>{
      console.log(result)
      if(result.success){
        this.userDetails = result.data;
        if(this.userDetails.profilePic.length == 0)
        {
          this.userDetails.profilePic = "https://static.thenounproject.com/png/3070444-200.png";
        }
        this.afterLoginCheck();
      } else {
        Swal.fire({text : "Login first"}).then(result=>{
          return this.router.navigateByUrl('/login')
        }) 
      }
    })
  }

  afterLoginCheck(){
    this.quizService.fetchAllQuiz().subscribe((result) => {
      if(result.success){
        this.mydatas = result.data;
        console.log(this.mydatas);
      }
      else{
        console.log("ERROR FROM NODEJS");
      }
    }) 
  }

  registerForQuiz(quizId:any){
    console.log(quizId)
    this.quizService.registerForQuiz(this.userDetails._id,quizId).subscribe((result)=>{
      console.log(result)
      if(result.success){
        Swal.fire({
          icon:'success',
          title:'Registered!',
          text:'You have been successfully registered.'
        }).then(result=>{
          // window.location.reload()
        })
      }
      else{
        Swal.fire({
          icon:'error',
          title:result.message
        }).then(result=>{
          // window.location.reload()
        })
      }
      
    })
  }

  slides = ['https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg','https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg','https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg'];

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "arrows" : true,

    "dots": true,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };


  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
