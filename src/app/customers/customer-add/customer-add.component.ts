import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomersService } from '../../shared/customers.service';
import { Store, State, select } from "@ngrx/store";
import * as customerActions from "../state/customer.actions";
import * as fromCustomer from "../state/customer.reducer";
import { Customer } from "../customer.model";
import { DepartmentService } from '../../shared/department.service';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder,private service:CustomersService,
    private store: Store<fromCustomer.AppState>,
    public dialogRef: MatDialogRef<CustomerAddComponent>) { }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      city: ['', [Validators.required]],
      hireDate: ['', [Validators.required]],
      gender: ['Male'],
      isPermanent: ['', [Validators.required]]
    });
  }

  get f() { return this.customerForm.controls; }

  onClear() {
    this.customerForm.reset();
    
  }

  onClose(){
    this.dialogRef.close();
  }



  submitForm() {
  
    this.submitted = true;


    const newCustomer: Customer = {
      fullName: this.customerForm.get("fullName").value,
      email: this.customerForm.get("email").value,
      mobile: this.customerForm.get("mobile").value,
      gender: this.customerForm.get("gender").value,
      city: this.customerForm.get("city").value,
      hireDate: this.customerForm.get("hireDate").value,
      isPermanent: this.customerForm.get("isPermanent").value,
    };

    this.store.dispatch(new customerActions.CreateCustomer(newCustomer));

    this.customerForm.reset();
  
    
  }

   /* Handle form errors in Angular 8 */
   public errorHandling = (control: string, error: string) => {
    return this.customerForm.controls[control].hasError(error);
  }



}
