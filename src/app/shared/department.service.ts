import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError,tap,map } from 'rxjs/operators';
import { Department } from '.././departments/department.model'
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  

 




  private apiUrl = "http://localhost:3000/departments";
  array = [];
  constructor(private http: HttpClient) { 

    
  }
  getDepartmentName($key) {
    if ($key == "0")
      return "";
    else{
      return _.find(this.array, (obj) => { return obj.$key == $key; })['name'];
    }
  }

getDepartments(): Observable<Department[]> {
  return this.http.get<Department[]>(this.apiUrl);
}

getDepartmentById(payload: number): Observable<Department> {
  return this.http.get<Department>(`${this.apiUrl}/${payload}`);
}

createDepartment(payload: Department): Observable<Department> {
  return this.http.post<Department>(this.apiUrl, payload);
}

updateDepartment(Department: Department): Observable<Department> {
  return this.http.patch<Department>(
    `${this.apiUrl}/${Department.id}`,
    Department
  );
}

deleteDepartment(payload: number) {
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
    // return an observable with a Department-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}