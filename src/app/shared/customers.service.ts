import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError,tap,map } from 'rxjs/operators';
import { Customer } from '.././customers/customer.model'
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = "http://localhost:3000/customers";

  constructor(private http: HttpClient) { 
  
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }



getCustomers(): Observable<Customer[]> {
  return this.http.get<Customer[]>(this.apiUrl);
}

getCustomerById(payload: number): Observable<Customer> {
  return this.http.get<Customer>(`${this.apiUrl}/${payload}`);
}

createCustomer(payload: Customer): Observable<Customer> {
  return this.http.post<Customer>(this.apiUrl, payload);
}

updateCustomer(customer: Customer): Observable<Customer> {
  return this.http.patch<Customer>(
    `${this.apiUrl}/${customer.id}`,
    customer
  );
}

deleteCustomer(payload: number) {
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
    // return an observable with a Customer-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}