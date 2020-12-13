import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators'; 
import { throwError, Observable, of } from 'rxjs';
import {environment} from '../../environments/environment'
import Swal from 'sweetalert2';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  url : string = environment.apiUrl;
  
  signup(data : any) : Observable<any>{
    return this.http.post(this.url + '/api/home/signup',data)
        .pipe(retry(2), catchError(this.handleError))
  }

  login(data : any) :Observable<any>{
    return this.http.post(this.url+'/api/home/login',data)
        .pipe(retry(2),catchError(this.handleError))
  }

  resendVerificationLink(email : string):Observable<any>{
    return this.http.get(`${this.url}/api/home/resendEmailVerification/${email}`)
                .pipe(retry(2),catchError(this.handleError))
  }

  saveToken(token : any){
    try{
      localStorage.setItem("user" , JSON.stringify(token));
      return true;
    } catch(e){
      return false;
    }
  }

  deleteUserToken(){
    try{
      localStorage.removeItem("user");
    } catch(e){
      return false;
    }
  }

  isLogin() {
    try{
      var userToken = localStorage.getItem("user");
      userToken = JSON.parse(userToken)
      console.log("user token", userToken)
      if(userToken){
        return userToken
      }
        // this.decodeToken(userToken).subscribe(result=>{
        //   if(result.success){
        //     console.log("result in service",result)
        //     return new Promise<any>((resolve, reject)=>{
        //       resolve(result)
        //     });
        //   } else {
        //     Swal.fire({text : "Login first"}).then(result=>{
        //       this.router.navigateByUrl('/login')
        //       return new Promise<any>((resolve, reject)=>{
        //         resolve(false)
        //       });
        //     })
        //   }
        // })
      else {
        return false
      }
    }catch(e){
      return false
    }
  }

  decodeToken(token : any):Observable<any>{
    return this.http.get(`${this.url}/api/home/detailFromToken/${token}`)
            .pipe(retry(2), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) { 
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
