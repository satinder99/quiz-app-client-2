import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators'; 
import { throwError, Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http : HttpClient
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
