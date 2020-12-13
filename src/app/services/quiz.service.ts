import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http : HttpClient
  ) { }

  url : string = environment.apiUrl;
  
  addQuiz(data : any) : Observable<any>{
    console.log("reached to addQuiz service funtion");
    return this.http
            .post(this.url + '/api/home/addQuiz',data)
            .pipe(retry(2),catchError(this.handleError))
  }

  fetchAllQuiz() : Observable<any>{
    console.log('calling all quiz data from : ',this.url)
    return this.http.get(this.url + '/api/admin/allquiz')
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
