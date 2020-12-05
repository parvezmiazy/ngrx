import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError,tap,map } from 'rxjs/operators';
import { User } from './user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }


getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl);
}

getUserById(payload: number): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/${payload}`);
}

createUser(payload: User): Observable<User> {
  return this.http.post<User>(this.apiUrl, payload);
}

updateUser(user: User): Observable<User> {
  return this.http.patch<User>(
    `${this.apiUrl}/${user.id}`,
    user
  );
}

deleteUser(payload: number) {
  return this.http.delete(`${this.apiUrl}/${payload}`);
}

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
