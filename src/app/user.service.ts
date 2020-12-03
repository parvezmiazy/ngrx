import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError,tap,map } from 'rxjs/operators';
import { IUser } from './user/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


//   getUsers():Observable<IUser[]>{
//     this.http.get<IUser[]>(this.apiUrl)
//     .pipe(
//           tap(data=>console.log('all:' + JSON.stringify(data))),
//           catchError(this.handleError)
//          );
// }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, ` + `body was: ${err.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
