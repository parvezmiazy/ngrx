import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Store} from "@ngrx/store";
import { Observable } from "rxjs";
import * as customerActions from "../state/customer.actions";
import * as fromCustomer from "../state/customer.reducer";
import { Customer } from "../customer.model";
import { CustomersService } from '../../shared/customers.service';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  submitted = false;
  constructor(
    public fb: FormBuilder,
    private service:CustomersService,
    public dialogRef: MatDialogRef<CustomerEditComponent>,
    private store: Store<fromCustomer.AppState>) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      city: ['', [Validators.required]],
      hireDate: ['', [Validators.required]],
      gender: ['',[Validators.required]],
      isPermanent: ['', [Validators.required]],
      id: null
    });

    const customer$: Observable<Customer> = this.store.select(
      fromCustomer.getCurrentCustomer
    )

    customer$.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          fullName: currentCustomer.fullName,
          email: currentCustomer.email,
          mobile: currentCustomer.mobile,
          gender: currentCustomer.gender,
          city: currentCustomer.city,
          hireDate: currentCustomer.hireDate,
          isPermanent: currentCustomer.isPermanent,
          id: currentCustomer.id
        });
      }
    })
  }
  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.customerForm.controls[control].hasError(error);
  }

  onClose(){
    this.dialogRef.close();
  }
}
